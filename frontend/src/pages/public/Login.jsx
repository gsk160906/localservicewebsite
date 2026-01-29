import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Eye, EyeOff, Zap, Mail, Lock, User, ArrowRight, Check } from 'lucide-react';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="auth-page">
            <div className="auth-container">
                <div className="auth-form-section">
                    <div className="auth-form-content">
                        <Link to="/" className="logo">
                            <div className="logo-icon"><Zap size={24} /></div>
                            <span>ServisGo</span>
                        </Link>
                        <div className="auth-header">
                            <h1>Welcome Back</h1>
                            <p>Sign in to your account to continue</p>
                        </div>
                        <form className="auth-form">
                            <div className="form-group">
                                <label className="form-label">Email Address</label>
                                <div className="input-with-icon">
                                    <Mail size={20} className="input-icon" />
                                    <input type="email" className="form-input" placeholder="Enter your email" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-label-row">
                                    <label className="form-label">Password</label>
                                    <Link to="/forgot-password" className="forgot-link">Forgot Password?</Link>
                                </div>
                                <div className="input-with-icon">
                                    <Lock size={20} className="input-icon" />
                                    <input type={showPassword ? 'text' : 'password'} className="form-input" placeholder="Enter your password" />
                                    <button type="button" className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                </div>
                            </div>
                            <label className="form-checkbox"><input type="checkbox" /><span>Remember me</span></label>
                            <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>Sign In</button>
                        </form>
                        <div className="auth-divider"><span>or continue with</span></div>
                        <div className="social-buttons">
                            <button className="btn btn-secondary">Google</button>
                            <button className="btn btn-secondary">Facebook</button>
                        </div>
                        <p className="auth-footer">Don't have an account? <Link to="/signup">Sign Up</Link></p>
                    </div>
                </div>
                <div className="auth-info-section">
                    <div className="auth-info-content">
                        <h2>Book Services with Confidence</h2>
                        <p>Join thousands of happy customers</p>
                        <div className="auth-features">
                            <div className="auth-feature"><Check size={20} /><span>Verified Professionals</span></div>
                            <div className="auth-feature"><Check size={20} /><span>Secure Payments</span></div>
                            <div className="auth-feature"><Check size={20} /><span>Quality Guaranteed</span></div>
                        </div>
                    </div>
                </div>
            </div>
            <style>{`
        .auth-page { min-height: 100vh; }
        .auth-container { display: grid; grid-template-columns: 1fr 1fr; width: 100%; min-height: 100vh; }
        .auth-form-section { display: flex; align-items: center; justify-content: center; padding: var(--space-8); background: white; }
        .auth-form-content { width: 100%; max-width: 420px; }
        .auth-form-content .logo { display: flex; align-items: center; gap: var(--space-2); margin-bottom: var(--space-10); }
        .auth-header { margin-bottom: var(--space-8); }
        .auth-header h1 { font-size: var(--text-3xl); margin-bottom: var(--space-2); }
        .auth-form { margin-bottom: var(--space-6); }
        .form-label-row { display: flex; justify-content: space-between; }
        .forgot-link { font-size: var(--text-sm); color: var(--primary-600); }
        .input-with-icon { position: relative; display: flex; align-items: center; }
        .input-icon { position: absolute; left: var(--space-4); color: var(--gray-400); }
        .input-with-icon .form-input { padding-left: var(--space-12); padding-right: var(--space-12); }
        .password-toggle { position: absolute; right: var(--space-4); background: none; border: none; color: var(--gray-400); cursor: pointer; }
        .form-checkbox { margin-bottom: var(--space-6); }
        .auth-divider { display: flex; align-items: center; gap: var(--space-4); margin: var(--space-6) 0; }
        .auth-divider::before, .auth-divider::after { content: ''; flex: 1; height: 1px; background: var(--gray-200); }
        .auth-divider span { color: var(--gray-500); font-size: var(--text-sm); }
        .social-buttons { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-4); margin-bottom: var(--space-6); }
        .auth-footer { text-align: center; color: var(--gray-600); }
        .auth-footer a { color: var(--primary-600); font-weight: var(--font-semibold); }
        .auth-info-section { background: var(--gradient-hero); display: flex; align-items: center; justify-content: center; padding: var(--space-8); }
        .auth-info-content { max-width: 400px; color: white; text-align: center; }
        .auth-info-content h2 { color: white; font-size: var(--text-3xl); margin-bottom: var(--space-4); }
        .auth-info-content > p { color: rgba(255,255,255,0.9); margin-bottom: var(--space-10); }
        .auth-features { display: flex; flex-direction: column; gap: var(--space-4); }
        .auth-feature { display: flex; align-items: center; gap: var(--space-3); background: rgba(255,255,255,0.1); padding: var(--space-4); border-radius: var(--radius-lg); }
        @media (max-width: 1024px) { .auth-container { grid-template-columns: 1fr; } .auth-info-section { display: none; } }
      `}</style>
        </div>
    );
};

export default Login;
