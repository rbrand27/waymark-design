import './PharmacyOpportunities.css'

function RiskBadge({ color, label }) {
  return (
    <span className="risk-badge">
      <span className="risk-dot" style={{ backgroundColor: color }} />
      <span className="risk-label">{label}</span>
    </span>
  )
}

function InfoIcon() {
  return (
    <svg className="info-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 5h2v2H9V5zm0 4h2v6H9V9zm1-9C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#717179"/>
    </svg>
  )
}

function DataTable({ columns, rows }) {
  return (
    <table className="data-table">
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.key}>{col.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {columns.map((col) => (
              <td key={col.key}>{row[col.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

function OpportunityCard({ title, lastSynced, risks, columns, rows }) {
  return (
    <div className="opportunity-card">
      <div className="card-header">
        <div className="card-title-row">
          <h4 className="card-title">{title}</h4>
          <InfoIcon />
        </div>
        <div className="card-meta">
          <span className="last-synced">Last synced {lastSynced}</span>
          <span className="meta-divider">|</span>
          {risks.map((risk, i) => (
            <span key={i} className="risk-group">
              {i > 0 && <span className="meta-divider">|</span>}
              <RiskBadge color={risk.color} label={risk.label} />
            </span>
          ))}
        </div>
      </div>
      <DataTable columns={columns} rows={rows} />
    </div>
  )
}

const missedFillsData = {
  title: 'Missed Fills',
  lastSynced: '12/22/23',
  risks: [{ color: '#E53935', label: 'All High Risk' }],
  columns: [
    { key: 'drug', label: 'Dispensed Drug' },
    { key: 'lastDispensed', label: 'Last Dispensed' },
    { key: 'daysCovered', label: '% Days Covered' },
    { key: 'pharmacy', label: 'Pharmacy Name' },
  ],
  rows: [
    { drug: 'Midodrine Hychloride', lastDispensed: '1/8/25', daysCovered: '75%', pharmacy: 'Kroger Limited Partnership I' },
    { drug: 'Midodrine Hychloride', lastDispensed: '1/8/25', daysCovered: '75%', pharmacy: 'Kroger Limited Partnership I' },
    { drug: 'Midodrine Hychloride', lastDispensed: '1/8/25', daysCovered: '75%', pharmacy: 'Kroger Limited Partnership I' },
    { drug: 'Midodrine Hychloride', lastDispensed: '1/8/25', daysCovered: '75%', pharmacy: 'Kroger Limited Partnership I' },
  ],
}

const denialsData = {
  title: 'Denials',
  lastSynced: '12/22/23',
  risks: [
    { color: '#E53935', label: 'High Risk' },
    { color: '#FB8C00', label: 'Med Risk' },
  ],
  columns: [
    { key: 'drug', label: 'Dispensed Drug' },
    { key: 'lastDispensed', label: 'Last Dispensed' },
    { key: 'repeatDenial', label: 'Repeat Denial' },
    { key: 'pharmacy', label: 'Pharmacy Name' },
  ],
  rows: [
    { drug: 'Midodrine Hychloride', lastDispensed: '1/8/25', repeatDenial: 'Yes', pharmacy: 'Kroger Limited Partnership I' },
    { drug: 'Midodrine Hychloride', lastDispensed: '1/8/25', repeatDenial: 'Yes', pharmacy: 'Kroger Limited Partnership I' },
    { drug: 'Midodrine Hychloride', lastDispensed: '1/8/25', repeatDenial: 'No', pharmacy: 'Kroger Limited Partnership I' },
    { drug: 'Midodrine Hychloride', lastDispensed: '1/8/25', repeatDenial: 'No', pharmacy: 'Kroger Limited Partnership I' },
  ],
}

const ninetyDaySupplyData = {
  title: '90 Day Supply',
  lastSynced: '12/22/23',
  risks: [
    { color: '#E53935', label: 'High Risk' },
    { color: '#FB8C00', label: 'Med Risk' },
  ],
  columns: [
    { key: 'drug', label: 'Dispensed Drug' },
    { key: 'lastDispensed', label: 'Last Dispensed' },
    { key: 'pharmacy', label: 'Pharmacy Name' },
  ],
  rows: [
    { drug: 'Midodrine Hychloride', lastDispensed: '1/8/25', pharmacy: 'Kroger Limited Partnership I' },
    { drug: 'Midodrine Hychloride', lastDispensed: '1/8/25', pharmacy: 'Kroger Limited Partnership I' },
    { drug: 'Midodrine Hychloride', lastDispensed: '1/8/25', pharmacy: 'Kroger Limited Partnership I' },
    { drug: 'Midodrine Hychloride', lastDispensed: '1/8/25', pharmacy: 'Kroger Limited Partnership I' },
  ],
}

export default function PharmacyOpportunities() {
  return (
    <div className="pharmacy-opportunities">
      <OpportunityCard {...missedFillsData} />
      <OpportunityCard {...denialsData} />
      <OpportunityCard {...ninetyDaySupplyData} />
    </div>
  )
}
