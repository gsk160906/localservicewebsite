import { Link } from 'react-router-dom';
import { DollarSign, Briefcase, Star, Clock, ArrowRight, TrendingUp, CheckCircle, Calendar } from 'lucide-react';

const ProviderDashboard = () => {
    const stats = [
        { label: 'Total Earnings', value: '$4,250', icon: DollarSign, color: 'var(--success)' },
        { label: 'Active Jobs', value: '3', icon: Briefcase, color: 'var(--primary-600)' },
        { label: 'Completed', value: '45', icon: CheckCircle, color: 'var(--accent-cyan)' },
        { label: 'Rating', value: '4.9', icon: Star, color: 'var(--accent-yellow)' },
    ];

    const recentJobs = [
        { id: 1, service: 'Home Cleaning', customer: 'Jane D.', date: 'Jan 30', time: '10:00 AM', status: 'upcoming', amount: 79 },
        { id: 2, service: 'Deep Cleaning', customer: 'John S.', date: 'Jan 31', time: '2:00 PM', status: 'pending', amount: 99 },
        { id: 3, service: 'Office Cleaning', customer: 'ABC Corp', date: 'Feb 1', time: '9:00 AM', status: 'upcoming', amount: 149 },
    ];

    return (
        <div className="dashboard-page">
            <div className="welcome-section">
                <div><h1>Welcome back, John!</h1><p>Here's your business overview</p></div>
                <Link to="/provider/job-requests" className="btn btn-primary">View Job Requests <ArrowRight size={18} /></Link>
            </div>

            <div className="stats-grid">
                {stats.map((stat, idx) => (
                    <div key={idx} className="card stat-card">
                        <div className="stat-icon" style={{ background: `${stat.color}15`, color: stat.color }}><stat.icon size={24} /></div>
                        <div className="stat-info"><div className="stat-value">{stat.value}</div><div className="stat-label">{stat.label}</div></div>
                    </div>
                ))}
            </div>

            <div className="dashboard-grid">
                <div className="card">
                    <div className="card-header"><h3 className="card-title">Upcoming Jobs</h3><Link to="/provider/active-jobs" className="btn btn-ghost btn-sm">View All</Link></div>
                    <div className="jobs-list">
                        {recentJobs.map(job => (
                            <Link key={job.id} to={`/provider/jobs/${job.id}`} className="job-item">
                                <div className="job-info">
                                    <h4>{job.service}</h4>
                                    <p>{job.customer}</p>
                                    <div className="job-meta"><Calendar size={14} /> {job.date}, {job.time}</div>
                                </div>
                                <div className="job-end">
                                    <span className={`badge ${job.status === 'upcoming' ? 'badge-info' : 'badge-warning'}`}>{job.status}</span>
                                    <span className="amount">${job.amount}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="card">
                    <h3 className="card-title" style={{ marginBottom: 'var(--space-4)' }}>This Week's Earnings</h3>
                    <div className="earnings-chart">
                        <div className="chart-placeholder">
                            <TrendingUp size={48} />
                            <p>$850 earned this week</p>
                            <span className="badge badge-success">+12% from last week</span>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        .dashboard-page { max-width: 1200px; margin: 0 auto; }
        .welcome-section { display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--space-8); }
        .welcome-section h1 { font-size: var(--text-2xl); margin-bottom: var(--space-1); }
        .welcome-section p { color: var(--gray-500); }
        .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--space-6); margin-bottom: var(--space-8); }
        .stat-card { display: flex; align-items: center; gap: var(--space-4); }
        .stat-icon { width: 56px; height: 56px; border-radius: var(--radius-xl); display: flex; align-items: center; justify-content: center; }
        .stat-value { font-size: var(--text-2xl); font-weight: var(--font-bold); }
        .stat-label { font-size: var(--text-sm); color: var(--gray-500); }
        .dashboard-grid { display: grid; grid-template-columns: 2fr 1fr; gap: var(--space-6); }
        .jobs-list { display: flex; flex-direction: column; gap: var(--space-3); }
        .job-item { display: flex; justify-content: space-between; align-items: center; padding: var(--space-4); background: var(--gray-50); border-radius: var(--radius-lg); }
        .job-item:hover { background: var(--gray-100); }
        .job-info h4 { font-size: var(--text-base); margin-bottom: var(--space-1); }
        .job-info p { font-size: var(--text-sm); color: var(--gray-500); margin-bottom: var(--space-1); }
        .job-meta { font-size: var(--text-sm); color: var(--gray-400); display: flex; align-items: center; gap: var(--space-1); }
        .job-end { text-align: right; }
        .job-end .amount { display: block; font-size: var(--text-lg); font-weight: var(--font-bold); color: var(--primary-600); margin-top: var(--space-2); }
        .earnings-chart { padding: var(--space-8); }
        .chart-placeholder { text-align: center; color: var(--gray-400); }
        .chart-placeholder p { font-size: var(--text-xl); font-weight: var(--font-bold); color: var(--gray-900); margin: var(--space-4) 0 var(--space-2); }
        @media (max-width: 1024px) { .stats-grid { grid-template-columns: repeat(2, 1fr); } .dashboard-grid { grid-template-columns: 1fr; } }
        @media (max-width: 768px) { .stats-grid { grid-template-columns: 1fr; } .welcome-section { flex-direction: column; gap: var(--space-4); text-align: center; } }
      `}</style>
        </div>
    );
};

export default ProviderDashboard;
