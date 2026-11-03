import { orders, stats } from '../data'
import Icon from './Icon'

export default function DashboardContent() {
  return (
    <main className="content">
      <div className="toolbar">
        <div>
          <h1>Overview</h1>
          <p className="muted">Tuesday, November 3</p>
        </div>
        <div className="toolbar-actions">
          <label className="search">
            <Icon name="search" size={18} />
            <input type="search" placeholder="Search orders..." />
          </label>
          <button type="button" className="btn btn-primary">New report</button>
        </div>
      </div>

      <section className="stat-grid">
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
      </section>
    </main>
  )
}
