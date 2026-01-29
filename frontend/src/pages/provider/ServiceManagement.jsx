import { Plus, Edit2, Trash2, DollarSign, Clock } from 'lucide-react';

const ServiceManagement = () => {
    const services = [
        { id: 1, name: 'Home Cleaning', price: 79, duration: '3-4 hours', active: true },
        { id: 2, name: 'Deep Cleaning', price: 99, duration: '4-5 hours', active: true },
        { id: 3, name: 'Move-out Cleaning', price: 129, duration: '5-6 hours', active: true },
        { id: 4, name: 'Office Cleaning', price: 149, duration: '4-6 hours', active: false },
    ];

    return (
        <div className="services-page">
            <div className="page-header">
                <div><h1>My Services</h1><p>Manage the services you offer</p></div>
                <button className="btn btn-primary"><Plus size={18} /> Add Service</button>
            </div>
            <div className="services-list">
                {services.map(s => (
                    <div key={s.id} className={`card service-card ${s.active ? '' : 'inactive'}`}>
                        <div className="service-main">
                            <div>
                                <h4>{s.name}</h4>
                                <div className="service-meta">
                                    <span><DollarSign size={14} /> ${s.price}</span>
                                    <span><Clock size={14} /> {s.duration}</span>
                                </div>
                            </div>
                            <span className={`badge ${s.active ? 'badge-success' : 'badge-gray'}`}>{s.active ? 'Active' : 'Inactive'}</span>
                        </div>
                        <div className="service-actions">
                            <button className="btn btn-ghost btn-sm"><Edit2 size={16} /> Edit</button>
                            <button className="btn btn-ghost btn-sm" style={{ color: 'var(--error)' }}><Trash2 size={16} /> Delete</button>
                        </div>
                    </div>
                ))}
            </div>
            <style>{`
        .services-page { max-width: 800px; margin: 0 auto; }
        .page-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--space-6); }
        .page-header h1 { font-size: var(--text-2xl); margin-bottom: var(--space-1); }
        .page-header p { color: var(--gray-500); }
        .services-list { display: flex; flex-direction: column; gap: var(--space-4); }
        .service-card.inactive { opacity: 0.7; }
        .service-main { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: var(--space-3); }
        .service-main h4 { margin-bottom: var(--space-2); }
        .service-meta { display: flex; gap: var(--space-4); font-size: var(--text-sm); color: var(--gray-500); }
        .service-meta span { display: flex; align-items: center; gap: var(--space-1); }
        .service-actions { display: flex; gap: var(--space-2); padding-top: var(--space-3); border-top: 1px solid var(--gray-100); }
        @media (max-width: 768px) { .page-header { flex-direction: column; gap: var(--space-4); align-items: flex-start; } }
      `}</style>
        </div>
    );
};

export default ServiceManagement;
