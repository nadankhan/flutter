import * as XLSX from 'xlsx';
export interface Finding { cell: string; row: number; colName: string; issue: string; suggestion: string; }
const REQUIRED = ['Hazard', 'Control Measure', 'Risk Rating', 'Responsibility'];
export function analyze(buffer: Buffer) {
  const wb = XLSX.read(buffer, { type: 'buffer' });
  const ws = wb.Sheets[wb.SheetNames[0]];
  const data = XLSX.utils.sheet_to_json(ws, { header: 1 }) as any[][];
  if (!data.length) return { score: 0, findings: [] };
  const headers = data[0].map(h => String(h).trim());
  const findings: Finding[] = [];
  const indices = REQUIRED.map(f => headers.findIndex(h => h.toLowerCase().includes(f.toLowerCase())));

  for (let r = 1; r < data.length; r++) {
    indices.forEach((cIdx, i) => {
      if (cIdx === -1) return;
      const val = data[r][cIdx];
      if (val === undefined || val === null || String(val).trim() === '') {
        findings.push({
          cell: XLSX.utils.encode_cell({ r, c: cIdx }),
          row: r + 1,
          colName: headers[cIdx],
          issue: `Missing ${REQUIRED[i]}`,
          suggestion: `Please provide the ${REQUIRED[i]} for this activity.`
        });
      }
    });
  }
  return { score: Math.max(0, 100 - findings.length * 5), findings };
}
