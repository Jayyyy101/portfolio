import { google } from "googleapis";

const SHEET_ID = process.env.GOOGLE_SHEETS_ID ?? "";

type RoleRow = {
  email: string;
  name: string;
  role: string;
  status: string;
  last_login: string;
};

function getPrivateKey() {
  return (process.env.GOOGLE_PRIVATE_KEY ?? "").replace(/\\n/g, "\n");
}

function getServiceAccountCredentials() {
  const rawJson = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  if (rawJson) {
    const parsed = JSON.parse(rawJson) as {
      client_email?: string;
      private_key?: string;
    };
    return {
      client_email: parsed.client_email ?? "",
      private_key: (parsed.private_key ?? "").replace(/\\n/g, "\n"),
    };
  }

  return {
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL ?? "",
    private_key: getPrivateKey(),
  };
}

function getSheetsClient() {
  const credentials = getServiceAccountCredentials();
  if (!SHEET_ID || !credentials.client_email || !credentials.private_key) {
    throw new Error(
      "Missing Google Sheets credentials. Set GOOGLE_SHEETS_ID plus either GOOGLE_SERVICE_ACCOUNT_JSON or GOOGLE_SERVICE_ACCOUNT_EMAIL and GOOGLE_PRIVATE_KEY."
    );
  }

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return google.sheets({ version: "v4", auth });
}

export async function readSheet(tab: string) {
  const sheets = getSheetsClient();
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: SHEET_ID,
    range: `${tab}!A:Z`,
  });
  return res.data.values ?? [];
}

export async function appendSheetRow(tab: string, values: string[]) {
  const sheets = getSheetsClient();
  await sheets.spreadsheets.values.append({
    spreadsheetId: SHEET_ID,
    range: `${tab}!A:Z`,
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [values],
    },
  });
}

export async function updateContentValue(
  key: string,
  value: string,
  updatedBy: string
) {
  const rows = await readSheet("content");
  const header = rows[0] ?? [];
  const keyIndex = header.indexOf("key");
  const valueIndex = header.indexOf("value");
  const updatedAtIndex = header.indexOf("updated_at");
  const updatedByIndex = header.indexOf("updated_by");

  const rowIndex = rows.findIndex((row, idx) => idx > 0 && row[keyIndex] === key);
  if (rowIndex === -1) return false;

  const rowNumber = rowIndex + 1;
  const sheets = getSheetsClient();
  const rowCopy = [...rows[rowIndex]];
  rowCopy[valueIndex] = value;
  rowCopy[updatedAtIndex] = new Date().toISOString();
  rowCopy[updatedByIndex] = updatedBy;

  await sheets.spreadsheets.values.update({
    spreadsheetId: SHEET_ID,
    range: `content!A${rowNumber}:Z${rowNumber}`,
    valueInputOption: "USER_ENTERED",
    requestBody: { values: [rowCopy] },
  });

  return true;
}

export async function updateRowByMatch(
  tab: string,
  matchColumn: string,
  matchValue: string,
  patch: Record<string, string>
) {
  const rows = await readSheet(tab);
  if (!rows.length) return false;
  const header = rows[0];
  const matchIndex = header.indexOf(matchColumn);
  if (matchIndex === -1) return false;

  const rowIndex = rows.findIndex((row, idx) => idx > 0 && row[matchIndex] === matchValue);
  if (rowIndex === -1) return false;

  const rowCopy = [...rows[rowIndex]];
  Object.entries(patch).forEach(([key, value]) => {
    const index = header.indexOf(key);
    if (index !== -1) {
      rowCopy[index] = value;
    }
  });

  const rowNumber = rowIndex + 1;
  const sheets = getSheetsClient();
  await sheets.spreadsheets.values.update({
    spreadsheetId: SHEET_ID,
    range: `${tab}!A${rowNumber}:Z${rowNumber}`,
    valueInputOption: "USER_ENTERED",
    requestBody: { values: [rowCopy] },
  });

  return true;
}

export async function getUserByEmail(email: string): Promise<RoleRow | null> {
  const rows = await readSheet("users");
  if (!rows.length) return null;
  const [header, ...body] = rows;
  const idx = {
    email: header.indexOf("email"),
    name: header.indexOf("name"),
    role: header.indexOf("role"),
    status: header.indexOf("status"),
    last_login: header.indexOf("last_login"),
  };
  const row = body.find((item) => item[idx.email] === email);
  if (!row) return null;

  return {
    email: row[idx.email] ?? "",
    name: row[idx.name] ?? "",
    role: row[idx.role] ?? "viewer",
    status: row[idx.status] ?? "active",
    last_login: row[idx.last_login] ?? "",
  };
}
