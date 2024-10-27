const Sidebar = () => (
    <nav className="w-64 h-screen fixed bg-gray-800 p-4 space-y-4">
        <div className="space-y-4">
            <h2 className="text-lg font-semibold">Quickstart Guide</h2>
            <div className="space-y-2">
                <p>Set up 85% Complete</p>
                <div className="bg-gray-600 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
            </div>
            <ul className="space-y-1">
                <li>1. Activate Your Account</li>
                <li>2. Company Information</li>
                <li>3. API Integration</li>
                <li>4. Map Security Logs</li>
                <li>5. Set Up Teams</li>
                <li>6. Distribute User Access</li>
            </ul>
            <h2 className="text-lg font-semibold">Resources</h2>
            <ul className="space-y-1">
                <li>API Keys</li>
                <li>Reference Documents</li>
                <li>Developer Documents</li>
                <li>Security Setup Guide</li>
            </ul>
        </div>
    </nav>
);

export default Sidebar;
