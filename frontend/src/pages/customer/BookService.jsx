import { Link } from 'react-router-dom';
import { Star, Clock, ChevronRight } from 'lucide-react';

const services = [
    { id: 1, name: 'Home Cleaning', price: 79, rating: 4.9, image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=200&h=150&fit=crop' },
    { id: 2, name: 'Plumbing', price: 69, rating: 4.8, image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=200&h=150&fit=crop' },
    { id: 3, name: 'Electrical', price: 79, rating: 4.9, image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=200&h=150&fit=crop' },
    { id: 4, name: 'AC Service', price: 89, rating: 4.7, image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=200&h=150&fit=crop' },
    { id: 5, name: 'Painting', price: 199, rating: 4.9, image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=200&h=150&fit=crop' },
    { id: 6, name: 'Beauty & Spa', price: 49, rating: 4.9, image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=200&h=150&fit=crop' },
];

const BookService = () => {
    return (
        <div className="book-service-page">
            <div className="page-header">
                <h1>Book a Service</h1>
                <p>Select the service you need</p>
            </div>

            <div className="steps-indicator">
                <div className="step active"><span>1</span>Select Service</div>
                <div className="step"><span>2</span>Schedule</div>
                <div className="step"><span>3</span>Address</div>
                <div className="step"><span>4</span>Checkout</div>
            </div>

            <div className="services-grid">
                {services.map(service => (
                    <Link key={service.id} to="/customer/schedule" className="card service-option">
                        <img src={service.image} alt={service.name} />
                        <div className="service-info">
                            <h3>{service.name}</h3>
                            <div className="service-meta">
                                <span className="rating"><Star size={14} fill="#FBBF24" color="#FBBF24" /> {service.rating}</span>
                                <span className="price">From ${service.price}</span>
                            </div>
                        </div>
                        <ChevronRight size={20} />
                    </Link>
                ))}
            </div>

            <style>{`
        .book-service-page { max-width: 900px; margin: 0 auto; }
        .page-header { margin-bottom: var(--space-6); }
        .page-header h1 { font-size: var(--text-2xl); margin-bottom: var(--space-1); }
        .page-header p { color: var(--gray-500); }
        .steps-indicator { display: flex; justify-content: space-between; margin-bottom: var(--space-8); padding: var(--space-4); background: white; border-radius: var(--radius-xl); box-shadow: var(--shadow-sm); }
        .step { display: flex; align-items: center; gap: var(--space-2); color: var(--gray-400); font-size: var(--text-sm); }
        .step span { width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; background: var(--gray-100); border-radius: 50%; font-weight: var(--font-semibold); }
        .step.active { color: var(--primary-600); }
        .step.active span { background: var(--primary-600); color: white; }
        .step.completed span { background: var(--success); color: white; }
        .services-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--space-4); }
        .service-option { display: flex; align-items: center; gap: var(--space-4); padding: var(--space-4); cursor: pointer; }
        .service-option:hover { border-color: var(--primary-300); }
        .service-option img { width: 80px; height: 60px; border-radius: var(--radius-lg); object-fit: cover; }
        .service-info { flex: 1; }
        .service-info h3 { font-size: var(--text-base); margin-bottom: var(--space-1); }
        .service-meta { display: flex; gap: var(--space-4); font-size: var(--text-sm); }
        .rating { display: flex; align-items: center; gap: var(--space-1); color: var(--gray-600); }
        .price { color: var(--primary-600); font-weight: var(--font-semibold); }
        @media (max-width: 768px) { .services-grid { grid-template-columns: 1fr; } .steps-indicator { overflow-x: auto; gap: var(--space-4); } }
      `}</style>
        </div>
    );
};

export default BookService;
