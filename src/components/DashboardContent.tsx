import { orders, stats } from '../data'
import Icon from './Icon'

interface Props {
  // How many stat cards sit side by side.
  columns: number
  // Compact mode swaps the wide toolbar and table for small-screen versions.
  compact?: boolean
}

export default function DashboardContent({ columns, compact = false }: Props) {
  return (
    <main className="content">
      <div className="toolbar">
        <div>
          <h1>Overview</h1>
          <p className="muted">Tuesday, November 3</p>
        </div>

        {compact ? (
          <div className="toolbar-actions">
            <button type="button" className="icon-btn" aria-label="Search">
              <Icon name="search" />
            </button>
            <button type="button" className="icon-btn" aria-label="Notifications">
              <Icon name="bell" />
            </button>
          </div>
        ) : (
          <div className="toolbar-actions">
            <label className="search">
              <Icon name="search" size={18} />
              <input type="search" placeholder="Search orders, customers, products..." />
            </label>
            <button type="button" className="btn">Export CSV</button>
            <button type="button" className="btn">Last 30 days</button>
            <button type="button" className="btn btn-primary">New report</button>
          </div>
        )}
      </div>

      <section
        className="stat-grid"
        style={{ gridTemplateColumns: `repeat(${columns}, minmax(220px, 1fr))` }}
      >
        {stats.map((stat) => (
          <article key={stat.label} className="stat-card">
            <span className="muted">{stat.label}</span>
            <strong className="stat-value">{stat.value}</strong>
            <span className={`trend trend-${stat.trend}`}>{stat.change} vs last month</span>
          </article>
        ))}
      </section>

      <section className="panel">
        <h2>Recent orders</h2>

        {compact ? (
          <ul className="order-list">
            {orders.map((order) => (
              <li key={order.id}>
                <div>
                  <strong>{order.customer}</strong>
                  <span className="muted">{order.product}</span>
                </div>
                <div className="order-meta">
                  <strong>{order.amount}</strong>
                  <span className={`status status-${order.status.toLowerCase()}`}>{order.status}</span>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <table className="orders-table">
            <thead>
              <tr>
                <th>Order</th>
                <th>Customer</th>
                <th>Product</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td className="muted">{order.id}</td>
                  <td>{order.customer}</td>
                  <td>{order.product}</td>
                  <td className="muted">{order.date}</td>
                  <td>{order.amount}</td>
                  <td>
                    <span className={`status status-${order.status.toLowerCase()}`}>{order.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </main>
  )
}
