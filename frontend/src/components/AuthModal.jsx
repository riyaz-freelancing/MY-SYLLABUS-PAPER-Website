import React, { useState } from 'react';
import { 
  X, 
  User, 
  ShieldCheck, 
  Lock, 
  Mail, 
  Phone, 
  BookOpen, 
  LogIn, 
  UserPlus, 
  CheckCircle2, 
  LayoutDashboard, 
  FileText, 
  Download, 
  Award, 
  Users, 
  Key, 
  TrendingUp, 
  DollarSign, 
  Plus, 
  Search, 
  Filter, 
  Bell, 
  Settings, 
  Layers, 
  Video, 
  HelpCircle,
  Clock,
  ArrowUpRight,
  PhoneCall,
  BarChart3,
  Database,
  Check,
  Zap,
  Sliders,
  LogOut,
  Maximize2,
  Minimize2
} from 'lucide-react';

export default function AuthModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('student-login'); 
  const [userRole, setUserRole] = useState('student'); 
  const [loggedInUser, setLoggedInUser] = useState(null);
  
  // Left Sidebar Navigation Section - role-aware
  const [sidebarSection, setSidebarSection] = useState('overview'); 

  // Full Screen toggle state - default true for Full Size UI
  const [isFullScreen, setIsFullScreen] = useState(true);

  // Forms
  const [studentLoginForm, setStudentLoginForm] = useState({ email: 'student@mysyllabuspaper.com', password: 'student123' });
  const [studentRegForm, setStudentRegForm] = useState({ name: 'Suresh Kumar', email: 'suresh@mysyllabuspaper.com', phone: '9876543210', targetExam: 'APPSC Group 1 & 2' });
  const [adminLoginForm, setAdminLoginForm] = useState({ username: 'admin@mysyllabuspaper.com', masterKey: 'admin123' });

  // Upload PDF Modal
  const [showPdfUpload, setShowPdfUpload] = useState(false);
  const [newPdf, setNewPdf] = useState({ title: '', category: 'APPSC', year: '2026' });

  // Filter state for student list & search
  const [studentFilter, setStudentFilter] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  if (!isOpen) return null;

  const handleStudentLogin = (e) => {
    if (e) e.preventDefault();
    setLoggedInUser({
      name: studentLoginForm.email.split('@')[0] || 'Aspirant',
      email: studentLoginForm.email || 'student@mysyllabuspaper.com',
      role: 'student',
      target: 'APPSC Group 1 & UPSC CSE',
      enrolledCourse: 'APPSC Group 1 Integrated Super 50 Batch',
      studentId: 'MSP-2026-8842',
      joinDate: '12 Jan 2026'
    });
    setUserRole('student');
    setSidebarSection('overview');
    setActiveTab('dashboard');
  };

  const handleStudentRegister = (e) => {
    if (e) e.preventDefault();
    setLoggedInUser({
      name: studentRegForm.name || 'New Aspirant',
      email: studentRegForm.email || 'student@mysyllabuspaper.com',
      role: 'student',
      target: studentRegForm.targetExam,
      enrolledCourse: studentRegForm.targetExam + ' Foundation Series',
      studentId: 'MSP-2026-' + Math.floor(1000 + Math.random() * 9000),
      joinDate: 'Today'
    });
    setUserRole('student');
    setSidebarSection('overview');
    setActiveTab('dashboard');
  };

  const handleAdminLogin = (e) => {
    if (e) e.preventDefault();
    setLoggedInUser({
      name: 'Krishna Pradeep (Director)',
      email: 'admin@mysyllabuspaper.com',
      role: 'admin',
      target: 'Master Platform Control',
      adminRole: 'Chief Academic Director & Superadmin'
    });
    setUserRole('admin');
    setSidebarSection('overview');
    setActiveTab('dashboard');
  };

  const handleAddPdf = (e) => {
    e.preventDefault();
    alert(`Successfully uploaded "${newPdf.title}" to the Syllabus Vault! All students can now access it.`);
    setShowPdfUpload(false);
    setNewPdf({ title: '', category: 'APPSC', year: '2026' });
  };

  // Student Navigation Items
  const studentNavItems = [
    { id: 'overview', label: 'My Dashboard', icon: LayoutDashboard, badge: 'Live', badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
    { id: 'syllabus', label: 'Syllabus & PDF Vault', icon: FileText, badge: '350 PDFs', badgeColor: 'bg-blue-50 text-[#155EEF] border-blue-200' },
    { id: 'tests', label: 'My Mock Tests & Ranks', icon: BarChart3, badge: '4 New', badgeColor: 'bg-amber-50 text-amber-700 border-amber-200' },
    { id: 'classes', label: 'Video Classes & Notes', icon: Video, badge: 'Live GS2', badgeColor: 'bg-purple-50 text-purple-700 border-purple-200' },
    { id: 'doubts', label: 'Ask Mentor / Doubts', icon: HelpCircle, badge: '24/7 Support', badgeColor: 'bg-slate-100 text-slate-700 border-slate-200' },
    { id: 'profile', label: 'My Profile & ID Card', icon: User, badge: 'Verified', badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
  ];

  // Admin Navigation Items
  const adminNavItems = [
    { id: 'overview', label: 'Executive Dashboard', icon: LayoutDashboard, badge: 'Admin', badgeColor: 'bg-rose-50 text-rose-700 border-rose-200' },
    { id: 'students', label: 'Students Directory', icon: Users, badge: '1,420 Total', badgeColor: 'bg-blue-50 text-[#155EEF] border-blue-200' },
    { id: 'syllabus', label: 'Manage Syllabus Vault', icon: FileText, badge: '350 Papers', badgeColor: 'bg-purple-50 text-purple-700 border-purple-200' },
    { id: 'tests', label: 'Test Series Performance', icon: BarChart3, badge: 'Batch Rank', badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
    { id: 'leads', label: 'Callback Leads', icon: PhoneCall, badge: '42 Urgent', badgeColor: 'bg-rose-600 text-white animate-pulse' },
    { id: 'settings', label: 'System & Portal Settings', icon: Settings, badge: 'Config', badgeColor: 'bg-slate-100 text-slate-700 border-slate-200' },
  ];

  const currentNavItems = userRole === 'admin' ? adminNavItems : studentNavItems;

  return (
    <div className={`fixed inset-0 z-50 font-sans transition-all duration-200 ${
      isFullScreen 
        ? 'w-screen h-screen bg-[#FFFFFF] flex flex-col' 
        : 'flex items-center justify-center p-2 sm:p-4 bg-[#0F172A]/70 backdrop-blur-md'
    }`}>
      <div className={`bg-[#FFFFFF] border-[#E2E8F0] w-full flex flex-col overflow-hidden transition-all ${
        isFullScreen 
          ? 'h-full border-0 rounded-none' 
          : 'max-w-6xl rounded-2xl border shadow-2xl max-h-[95vh] h-[860px]'
      }`}>
        
        {/* Modal Top Header */}
        <div className="bg-[#FFFFFF] px-5 sm:px-6 py-3.5 border-b border-[#E2E8F0] flex items-center justify-between shrink-0 shadow-sm">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-xl text-white shadow-sm ${userRole === 'admin' ? 'bg-[#DC2626]' : 'bg-[#155EEF]'}`}>
              <LayoutDashboard className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-[#155EEF] uppercase tracking-wider block">
                MY SYLLABUS PAPER (MSP) • PORTAL CONTROL CENTER
              </span>
              <h3 className="text-base sm:text-lg font-bold text-[#0F172A]">
                {activeTab === 'dashboard' ? (
                  userRole === 'admin' ? 'System Administrator Control Center' : 'Aspirant Learning & Exam Dashboard'
                ) : 'Student & Faculty Access Portal'}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsFullScreen(!isFullScreen)}
              className="px-3 py-1.5 text-xs text-[#334155] hover:text-[#0F172A] bg-[#F8FAFC] hover:bg-[#F1F5F9] border border-[#E2E8F0] rounded-xl transition-colors flex items-center gap-1.5 font-bold shadow-sm"
              title={isFullScreen ? "Switch to Window View" : "Switch to Full Screen UI"}
            >
              {isFullScreen ? (
                <>
                  <Minimize2 className="w-4 h-4 text-amber-600" />
                  <span className="hidden sm:inline">Windowed</span>
                </>
              ) : (
                <>
                  <Maximize2 className="w-4 h-4 text-[#155EEF]" />
                  <span className="hidden sm:inline">Full Screen UI</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-[#94A3B8] hover:text-[#0F172A] hover:bg-[#F1F5F9] rounded-xl transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Top Navigation Bar */}
        <div className="bg-[#F8FAFC] px-5 sm:px-6 py-2.5 border-b border-[#E2E8F0] flex flex-wrap items-center justify-between gap-2 text-xs font-bold shrink-0">
          {loggedInUser ? (
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-2">
                <span className="text-xs text-[#64748B] font-semibold">Active Account:</span>
                <span className={`px-3 py-1 rounded-lg text-xs font-bold border flex items-center gap-1.5 ${
                  loggedInUser.role === 'admin' 
                    ? 'bg-rose-50 text-rose-800 border-rose-200' 
                    : 'bg-blue-50 text-[#155EEF] border-blue-200'
                }`}>
                  <span className={`w-2 h-2 rounded-full ${loggedInUser.role === 'admin' ? 'bg-rose-500' : 'bg-emerald-500'} animate-pulse`}></span>
                  <span>{loggedInUser.name}</span>
                  <span className="opacity-75">({loggedInUser.role.toUpperCase()})</span>
                </span>
              </div>

              <div className="flex items-center gap-2">
                {loggedInUser.role === 'student' ? (
                  <button
                    onClick={handleAdminLogin}
                    className="px-3 py-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 transition-colors text-[11px] font-bold"
                  >
                    Switch to Demo Admin
                  </button>
                ) : (
                  <button
                    onClick={handleStudentLogin}
                    className="px-3 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#155EEF] border border-blue-200 transition-colors text-[11px] font-bold"
                  >
                    Switch to Demo Student
                  </button>
                )}

                <button
                  onClick={() => {
                    setLoggedInUser(null);
                    setActiveTab('student-login');
                    if (onClose) onClose();
                  }}
                  className="px-3 py-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 transition-colors text-[11px] flex items-center gap-1 font-bold shadow-sm"
                  title="Logout and redirect back to Website Home Page"
                >
                  <LogOut className="w-3.5 h-3.5 text-rose-600" />
                  <span>Sign Out to Website</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab('student-login')}
                className={`px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
                  activeTab === 'student-login' 
                    ? 'bg-[#155EEF] text-white shadow-sm' 
                    : 'bg-[#E2E8F0] text-[#475569] hover:text-[#0F172A]'
                }`}
              >
                <LogIn className="w-4 h-4" />
                <span>Student Login</span>
              </button>

              <button
                onClick={() => setActiveTab('student-register')}
                className={`px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
                  activeTab === 'student-register' 
                    ? 'bg-[#155EEF] text-white shadow-sm' 
                    : 'bg-[#E2E8F0] text-[#475569] hover:text-[#0F172A]'
                }`}
              >
                <UserPlus className="w-4 h-4" />
                <span>New Student Registration</span>
              </button>

              <button
                onClick={() => setActiveTab('admin-login')}
                className={`px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
                  activeTab === 'admin-login' 
                    ? 'bg-[#DC2626] text-white shadow-sm' 
                    : 'bg-[#E2E8F0] text-[#475569] hover:text-[#0F172A]'
                }`}
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Admin Login</span>
              </button>
            </div>
          )}
        </div>

        {/* Modal Main Content Container */}
        <div className="flex-1 overflow-hidden bg-[#F8FAFC] text-[#0F172A] flex">
          
          {/* LOGIN / REGISTER FORM VIEWS */}
          {activeTab !== 'dashboard' && (
            <div className="w-full p-8 overflow-y-auto bg-white">
              {activeTab === 'student-login' && (
                <div className="max-w-md mx-auto space-y-6 pt-4">
                  <div className="p-4 bg-blue-50/80 border border-blue-200 rounded-2xl text-xs space-y-2 shadow-sm">
                    <div className="flex items-center justify-between text-[#155EEF] font-bold uppercase">
                      <span className="flex items-center gap-1.5">
                        <Key className="w-4 h-4 text-[#155EEF]" />
                        <span>Demo Student Account Credentials</span>
                      </span>
                      <span className="text-[10px] bg-blue-100 px-2 py-0.5 rounded text-[#155EEF] border border-blue-200 font-bold">Pre-filled</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-[#475569] pt-1">
                      <div>Email: <strong className="text-[#0F172A]">student@mysyllabuspaper.com</strong></div>
                      <div>Password: <strong className="text-[#0F172A]">student123</strong></div>
                    </div>
                    <button
                      onClick={handleStudentLogin}
                      className="w-full mt-2 py-2.5 bg-[#155EEF] hover:bg-[#0F172A] text-white font-bold rounded-xl text-xs transition-colors shadow-sm flex items-center justify-center gap-2"
                    >
                      <Zap className="w-4 h-4 text-amber-300 fill-amber-300" />
                      <span>1-Click Auto Login as Student Dashboard</span>
                    </button>
                  </div>

                  <div className="text-center space-y-1">
                    <h4 className="text-xl font-bold text-[#0F172A]">Student Sign In</h4>
                    <p className="text-xs text-[#64748B]">Access saved syllabus sheets, test analytics & video explanations</p>
                  </div>

                  <form onSubmit={handleStudentLogin} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-[#334155] uppercase mb-1">Student Email Address</label>
                      <input
                        type="email"
                        required
                        value={studentLoginForm.email}
                        onChange={(e) => setStudentLoginForm({ ...studentLoginForm, email: e.target.value })}
                        className="w-full bg-white border border-[#E2E8F0] rounded-xl py-2.5 px-3.5 text-xs text-[#0F172A] font-mono focus:border-[#155EEF] focus:outline-none shadow-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#334155] uppercase mb-1">Password</label>
                      <input
                        type="password"
                        required
                        value={studentLoginForm.password}
                        onChange={(e) => setStudentLoginForm({ ...studentLoginForm, password: e.target.value })}
                        className="w-full bg-white border border-[#E2E8F0] rounded-xl py-2.5 px-3.5 text-xs text-[#0F172A] font-mono focus:border-[#155EEF] focus:outline-none shadow-sm"
                      />
                    </div>
                    <button type="submit" className="w-full py-3.5 bg-[#155EEF] hover:bg-[#0F172A] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-transform active:scale-95">
                      Login to Aspirant Dashboard
                    </button>
                  </form>
                </div>
              )}

              {activeTab === 'student-register' && (
                <div className="max-w-md mx-auto space-y-6 pt-4">
                  <div className="text-center space-y-1">
                    <h4 className="text-xl font-bold text-[#0F172A]">New Student Registration</h4>
                    <p className="text-xs text-[#64748B]">Join 150,000+ Civil Services Aspirants across APPSC, TGPSC & UPSC</p>
                  </div>
                  <form onSubmit={handleStudentRegister} className="space-y-3.5">
                    <div>
                      <label className="block text-xs font-bold text-[#334155] uppercase mb-1">Full Name</label>
                      <input
                        type="text"
                        required
                        value={studentRegForm.name}
                        onChange={(e) => setStudentRegForm({ ...studentRegForm, name: e.target.value })}
                        placeholder="e.g. K. Suresh Kumar"
                        className="w-full bg-white border border-[#E2E8F0] rounded-xl py-2.5 px-3.5 text-xs text-[#0F172A] focus:border-[#155EEF] focus:outline-none shadow-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#334155] uppercase mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        value={studentRegForm.email}
                        onChange={(e) => setStudentRegForm({ ...studentRegForm, email: e.target.value })}
                        placeholder="suresh@gmail.com"
                        className="w-full bg-white border border-[#E2E8F0] rounded-xl py-2.5 px-3.5 text-xs text-[#0F172A] focus:border-[#155EEF] focus:outline-none shadow-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#334155] uppercase mb-1">Target Examination</label>
                      <select
                        value={studentRegForm.targetExam}
                        onChange={(e) => setStudentRegForm({ ...studentRegForm, targetExam: e.target.value })}
                        className="w-full bg-white border border-[#E2E8F0] rounded-xl py-2.5 px-3.5 text-xs text-[#0F172A] focus:border-[#155EEF] focus:outline-none shadow-sm"
                      >
                        <option value="APPSC Group 1 & 2">APPSC Group 1 & Group 2</option>
                        <option value="TGPSC Group 1 & 2">TGPSC Group 1 & Group 2</option>
                        <option value="UPSC CSE 2026">UPSC Civil Services 2026</option>
                        <option value="Combo All State Exams">All State PSC & UPSC Combo</option>
                      </select>
                    </div>
                    <button type="submit" className="w-full py-3.5 bg-[#155EEF] hover:bg-[#0F172A] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-transform active:scale-95">
                      Create Account & Access Dashboard
                    </button>
                  </form>
                </div>
              )}

              {activeTab === 'admin-login' && (
                <div className="max-w-md mx-auto space-y-6 pt-4">
                  <div className="p-4 bg-rose-50/80 border border-rose-200 rounded-2xl text-xs space-y-2 shadow-sm">
                    <div className="flex items-center justify-between text-rose-900 font-bold uppercase">
                      <span className="flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-rose-600" />
                        <span>Demo Executive Admin Credentials</span>
                      </span>
                      <span className="text-[10px] bg-rose-100 px-2 py-0.5 rounded text-rose-900 border border-rose-200 font-bold">Pre-filled</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-[#475569] pt-1">
                      <div>Admin User: <strong className="text-[#0F172A]">admin@mysyllabuspaper.com</strong></div>
                      <div>Master Key: <strong className="text-[#0F172A]">admin123</strong></div>
                    </div>
                    <button
                      onClick={handleAdminLogin}
                      className="w-full mt-2 py-2.5 bg-[#DC2626] hover:bg-[#0F172A] text-white font-bold rounded-xl text-xs transition-colors shadow-sm flex items-center justify-center gap-2"
                    >
                      <Zap className="w-4 h-4 text-amber-300 fill-amber-300" />
                      <span>1-Click Auto Login as System Executive Dashboard</span>
                    </button>
                  </div>

                  <div className="text-center space-y-1">
                    <h4 className="text-xl font-bold text-[#DC2626]">System Administrator Login</h4>
                    <p className="text-xs text-[#64748B]">Authorized Faculty & Admin Control Access Only</p>
                  </div>

                  <form onSubmit={handleAdminLogin} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-[#334155] uppercase mb-1">Administrator Username</label>
                      <input
                        type="text"
                        required
                        value={adminLoginForm.username}
                        onChange={(e) => setAdminLoginForm({ ...adminLoginForm, username: e.target.value })}
                        className="w-full bg-white border border-[#E2E8F0] rounded-xl py-2.5 px-3.5 text-xs text-[#0F172A] font-mono focus:border-rose-600 focus:outline-none shadow-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#334155] uppercase mb-1">Master Access Key</label>
                      <input
                        type="password"
                        required
                        value={adminLoginForm.masterKey}
                        onChange={(e) => setAdminLoginForm({ ...adminLoginForm, masterKey: e.target.value })}
                        className="w-full bg-white border border-[#E2E8F0] rounded-xl py-2.5 px-3.5 text-xs text-[#0F172A] font-mono focus:border-rose-600 focus:outline-none shadow-sm"
                      />
                    </div>
                    <button type="submit" className="w-full py-3.5 bg-[#DC2626] hover:bg-[#0F172A] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-transform active:scale-95">
                      Enter Executive Admin Control Panel
                    </button>
                  </form>
                </div>
              )}
            </div>
          )}

          {/* DASHBOARD VIEW WITH INSTANT 1-CLICK LEFT SIDEBAR MENU */}
          {activeTab === 'dashboard' && loggedInUser && (
            <div className="w-full h-full flex flex-col md:flex-row overflow-hidden bg-[#F8FAFC]">
              
              {/* LEFT SIDEBAR MENU PANEL */}
              <div className="w-full md:w-64 bg-white border-r border-[#E2E8F0] p-3.5 space-y-3 shrink-0 flex flex-col justify-between shadow-sm">
                <div className="space-y-3">
                  
                  {/* User Profile Card Header in Sidebar */}
                  <div className={`p-3 rounded-2xl border ${
                    userRole === 'admin' 
                      ? 'bg-rose-50 border-rose-200 text-rose-900' 
                      : 'bg-blue-50 border-blue-200 text-blue-900'
                  }`}>
                    <div className="flex items-center gap-2.5">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-white shadow-sm ${
                        userRole === 'admin' ? 'bg-[#DC2626]' : 'bg-[#155EEF]'
                      }`}>
                        {loggedInUser.name.charAt(0)}
                      </div>
                      <div className="overflow-hidden">
                        <h5 className="text-xs font-bold text-[#0F172A] truncate">{loggedInUser.name}</h5>
                        <span className="text-[10px] text-[#64748B] block truncate font-mono">{loggedInUser.target}</span>
                      </div>
                    </div>
                  </div>

                  {/* Left Sidebar Section Label */}
                  <div className="px-2 flex items-center justify-between text-[10px] font-bold text-[#64748B] uppercase tracking-wider">
                    <span>{userRole === 'admin' ? 'ADMIN CONTROL MENU' : 'ASPIRANT MAIN MENU'}</span>
                    <span className="text-[#155EEF]">1-CLICK PAGES</span>
                  </div>

                  {/* Dynamic 1-Click Left Navigation Menu Items */}
                  <nav className="space-y-1 text-xs font-bold">
                    {currentNavItems.map((item) => {
                      const Icon = item.icon;
                      const isActive = sidebarSection === item.id;
                      return (
                        <button
                          key={item.id}
                          onClick={() => setSidebarSection(item.id)}
                          className={`w-full p-2.5 rounded-xl text-left flex items-center justify-between transition-all duration-150 ${
                            isActive
                              ? userRole === 'admin'
                                ? 'bg-[#DC2626] text-white shadow-sm font-bold'
                                : 'bg-[#155EEF] text-white shadow-sm font-bold'
                              : 'text-[#475569] hover:text-[#0F172A] hover:bg-[#F1F5F9]'
                          }`}
                        >
                          <div className="flex items-center gap-2.5 truncate">
                            <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-[#64748B]'}`} />
                            <span className="truncate">{item.label}</span>
                          </div>

                          {item.badge && (
                            <span className={`text-[10px] px-2 py-0.5 rounded-md font-bold border shrink-0 ${
                              isActive ? 'bg-white/20 text-white border-white/30' : item.badgeColor
                            }`}>
                              {item.badge}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </nav>

                </div>

                {/* Sidebar Bottom Action / Upload Button */}
                <div className="pt-3 border-t border-[#E2E8F0] space-y-2">
                  {userRole === 'admin' ? (
                    <button
                      onClick={() => setShowPdfUpload(true)}
                      className="w-full py-2.5 bg-[#155EEF] hover:bg-[#0F172A] text-white font-bold text-xs rounded-xl shadow-sm transition-colors flex items-center justify-center gap-1.5 uppercase tracking-wider"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Upload New PDF</span>
                    </button>
                  ) : (
                    <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-[11px] space-y-1 shadow-sm">
                      <div className="flex items-center gap-1 text-[#16A34A] font-bold">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Active Super 50 Access</span>
                      </div>
                      <p className="text-[#64748B] text-[10px] leading-tight">
                        Unlimited downloads & test series active until UPSC Mains 2026.
                      </p>
                    </div>
                  )}

                  <button
                    onClick={() => {
                      setLoggedInUser(null);
                      setActiveTab('student-login');
                      if (onClose) onClose();
                    }}
                    className="w-full py-2.5 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <LogOut className="w-4 h-4 text-rose-600" />
                    <span>Sign Out to Website</span>
                  </button>
                </div>

              </div>

              {/* RIGHT DYNAMIC PAGE CONTENT AREA */}
              <div className="flex-1 p-5 sm:p-6 overflow-y-auto space-y-6 bg-[#F8FAFC]">
                
                {/* ========================================================================= */}
                {/* 1. OVERVIEW DASHBOARD PAGE (STUDENT & ADMIN VIEWS) */}
                {/* ========================================================================= */}
                {sidebarSection === 'overview' && (
                  <div className="space-y-6 animate-in fade-in duration-150 font-sans">
                    
                    {/* Header Banner */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-[#E2E8F0]">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-xl font-bold text-[#0F172A]">
                            {userRole === 'admin' ? 'Executive Control & Overview' : `Welcome Back, ${loggedInUser.name}! 👋`}
                          </h4>
                          <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-[#16A34A] border border-emerald-200 text-[11px] font-semibold">
                            Live Sync Active
                          </span>
                        </div>
                        <span className="text-xs text-[#64748B] mt-0.5 block">
                          {userRole === 'admin' 
                            ? 'Real-time academy performance, enrollments, syllabus downloads, and lead conversions.' 
                            : 'Track your preparation progress, download target syllabus sheets, and attempt mock tests.'}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        {userRole === 'admin' && (
                          <button onClick={() => alert("Downloading Academy Revenue & Admissions PDF Report...")} className="px-3.5 py-2 bg-white hover:bg-[#F8FAFC] text-[#155EEF] font-bold text-xs rounded-xl border border-[#E2E8F0] shadow-sm">
                            Export Report 📥
                          </button>
                        )}
                        <button onClick={() => setSidebarSection('syllabus')} className="px-3.5 py-2 bg-[#155EEF] hover:bg-[#0F172A] text-white font-bold text-xs rounded-xl shadow-sm transition-colors">
                          Open PDF Vault 📁
                        </button>
                      </div>
                    </div>

                    {/* KPI Stat Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {userRole === 'admin' ? (
                        <>
                          <div className="bg-white border border-[#E2E8F0] p-4 rounded-2xl shadow-sm overflow-hidden">
                            <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider block truncate">Monthly SaaS Revenue</span>
                            <span className="text-2xl font-bold text-[#16A34A] block mt-1">₹18,45,000</span>
                            <span className="text-[10px] text-[#16A34A] font-semibold mt-1.5 flex items-center gap-1 truncate">
                              <TrendingUp className="w-3.5 h-3.5 shrink-0" /> +24.5% vs previous month
                            </span>
                          </div>

                          <div className="bg-white border border-[#E2E8F0] p-4 rounded-2xl shadow-sm overflow-hidden">
                            <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider block truncate">Total Enrolled Aspirants</span>
                            <span className="text-2xl font-bold text-[#155EEF] block mt-1">1,420</span>
                            <span className="text-[10px] text-[#64748B] font-semibold mt-1.5 block truncate">APPSC: 680 • TGPSC: 450 • UPSC: 290</span>
                          </div>

                          <div className="bg-white border border-[#E2E8F0] p-4 rounded-2xl shadow-sm overflow-hidden">
                            <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider block truncate">Syllabus PDF Vault</span>
                            <span className="text-2xl font-bold text-purple-700 block mt-1">350 PDFs</span>
                            <span className="text-[10px] text-purple-700 font-semibold mt-1.5 block truncate">24,500 Total Student Downloads</span>
                          </div>

                          <div className="bg-white border border-[#E2E8F0] p-4 rounded-2xl shadow-sm overflow-hidden">
                            <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider block truncate">Pending Callback Leads</span>
                            <span className="text-2xl font-bold text-amber-700 block mt-1">42 Urgent</span>
                            <span className="text-[10px] text-amber-800 font-semibold mt-1.5 block truncate">High Intent Inquiries</span>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="bg-white border border-[#E2E8F0] p-4 rounded-2xl shadow-sm overflow-hidden">
                            <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider block truncate">Enrolled Course</span>
                            <span className="text-base font-bold text-[#155EEF] block mt-1 leading-tight truncate">APPSC Group 1 Super 50</span>
                            <span className="text-[10px] text-[#16A34A] font-semibold mt-1.5 block truncate">Status: Active Subscription</span>
                          </div>

                          <div className="bg-white border border-[#E2E8F0] p-4 rounded-2xl shadow-sm overflow-hidden">
                            <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider block truncate">Syllabus Completion</span>
                            <span className="text-2xl font-bold text-[#16A34A] block mt-1">78.5%</span>
                            <div className="w-full bg-[#F1F5F9] h-2 rounded-full mt-2 overflow-hidden border border-[#E2E8F0]">
                              <div className="bg-[#16A34A] h-full w-[78.5%] rounded-full"></div>
                            </div>
                          </div>

                          <div className="bg-white border border-[#E2E8F0] p-4 rounded-2xl shadow-sm overflow-hidden">
                            <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider block truncate">Mock Tests Rank</span>
                            <span className="text-2xl font-bold text-amber-700 block mt-1">Rank #14 / 850</span>
                            <span className="text-[10px] text-[#64748B] font-semibold mt-1.5 block truncate">Average Score: 138/200</span>
                          </div>

                          <div className="bg-white border border-[#E2E8F0] p-4 rounded-2xl shadow-sm overflow-hidden">
                            <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider block truncate">Vault Downloads</span>
                            <span className="text-2xl font-bold text-purple-700 block mt-1">28 Papers</span>
                            <span className="text-[10px] text-[#64748B] font-semibold mt-1.5 block truncate">Updated Today</span>
                          </div>
                        </>
                      )}
                    </div>

                    {/* Quick Access Action Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Left Block: Quick Syllabus Vault Shortcuts */}
                      <div className="bg-white border border-[#E2E8F0] rounded-2xl p-4 sm:p-5 space-y-3 shadow-sm overflow-hidden">
                        <div className="flex items-center justify-between gap-2">
                          <h5 className="text-sm font-bold text-[#0F172A] flex items-center gap-2 truncate">
                            <FileText className="w-4 h-4 text-[#155EEF] shrink-0" />
                            <span className="truncate">Target Exam Syllabus Downloads</span>
                          </h5>
                          <button onClick={() => setSidebarSection('syllabus')} className="text-xs text-[#155EEF] font-bold hover:underline shrink-0">
                            View All (350) →
                          </button>
                        </div>

                        <div className="space-y-2">
                          {[
                            { title: 'APPSC Group 1 Mains Official Syllabus & Weightage 2026', tag: 'APPSC', size: '2.4 MB' },
                            { title: 'TGPSC Group 2 General Studies & Economy Detailed Syllabus', tag: 'TGPSC', size: '3.1 MB' },
                            { title: 'UPSC Civil Services Prelims GS 1 & CSAT Micro Syllabus', tag: 'UPSC', size: '1.8 MB' },
                          ].map((doc, i) => (
                            <div key={i} className="p-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl flex items-center justify-between gap-3 text-xs hover:border-[#CBD5E1] transition-colors overflow-hidden">
                              <div className="min-w-0 flex-1">
                                <div className="flex items-center gap-2 overflow-hidden">
                                  <span className="px-1.5 py-0.5 rounded bg-blue-50 text-[#155EEF] font-bold text-[10px] border border-blue-200 shrink-0">{doc.tag}</span>
                                  <span className="font-bold text-[#0F172A] truncate block">{doc.title}</span>
                                </div>
                                <span className="text-[10px] text-[#64748B] font-mono mt-0.5 block truncate">{doc.size} • Verified PDF</span>
                              </div>
                              <button onClick={() => alert(`Downloading ${doc.title}...`)} className="px-2.5 py-1.5 bg-[#155EEF] hover:bg-[#0F172A] text-white font-bold rounded-lg text-[11px] shrink-0 shadow-sm transition-colors whitespace-nowrap">
                                Download PDF
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right Block: Live Test Series Schedule */}
                      <div className="bg-white border border-[#E2E8F0] rounded-2xl p-4 sm:p-5 space-y-3 shadow-sm overflow-hidden">
                        <div className="flex items-center justify-between gap-2">
                          <h5 className="text-sm font-bold text-[#0F172A] flex items-center gap-2 truncate">
                            <BarChart3 className="w-4 h-4 text-[#16A34A] shrink-0" />
                            <span className="truncate">Upcoming & Active Mock Tests</span>
                          </h5>
                          <button onClick={() => setSidebarSection('tests')} className="text-xs text-[#16A34A] font-bold hover:underline shrink-0">
                            All Tests →
                          </button>
                        </div>

                        <div className="space-y-2">
                          {[
                            { name: 'APPSC Group 1 Mains Grand Test 04 (Indian Polity & Constitution)', date: 'Live Today', attempts: '420 Attempted', status: 'Live Now' },
                            { name: 'TGPSC Group 2 Full Length Mock Test 02', date: 'Tomorrow, 10:00 AM', attempts: 'Upcoming', status: 'Scheduled' },
                            { name: 'UPSC Prelims GS 1 Subject Test (Economy & Budget)', date: 'Sunday, 9:00 AM', attempts: 'Upcoming', status: 'Scheduled' },
                          ].map((t, idx) => (
                            <div key={idx} className="p-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl flex items-center justify-between gap-3 text-xs overflow-hidden">
                              <div className="min-w-0 flex-1">
                                <h6 className="font-bold text-[#0F172A] text-xs truncate">{t.name}</h6>
                                <span className="text-[10px] text-[#64748B] mt-0.5 block truncate">{t.date} • {t.attempts}</span>
                              </div>
                              <button onClick={() => alert(`Opening test portal for: ${t.name}`)} className={`px-2.5 py-1.5 font-bold rounded-lg text-[11px] shrink-0 whitespace-nowrap ${
                                t.status === 'Live Now' ? 'bg-[#16A34A] text-white shadow-sm animate-pulse' : 'bg-[#E2E8F0] text-[#334155]'
                              }`}>
                                {t.status === 'Live Now' ? 'Start Test ⚡' : 'View Schedule'}
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                  </div>
                )}

                {/* ========================================================================= */}
                {/* 2. STUDENTS & ADMISSIONS DIRECTORY PAGE */}
                {/* ========================================================================= */}
                {sidebarSection === 'students' && (
                  <div className="space-y-6 animate-in fade-in duration-150">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-[#E2E8F0]">
                      <div>
                        <h4 className="text-xl font-bold text-[#0F172A]">Students & Admissions Directory</h4>
                        <span className="text-xs text-[#64748B]">Total 1,420 Active Registered Aspirants in Academy Database</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        {['ALL', 'APPSC', 'TGPSC', 'UPSC'].map((cat) => (
                          <button
                            key={cat}
                            onClick={() => setStudentFilter(cat)}
                            className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors ${
                              studentFilter === cat 
                                ? 'bg-[#155EEF] text-white shadow-sm' 
                                : 'bg-white text-[#475569] hover:bg-[#F1F5F9] border border-[#E2E8F0]'
                            }`}
                          >
                            {cat}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Search & Filter Bar */}
                    <div className="flex items-center gap-3 bg-white border border-[#E2E8F0] p-3 rounded-xl shadow-sm">
                      <Search className="w-4 h-4 text-[#94A3B8] ml-1" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search student by name, phone (+91), or exam target..."
                        className="bg-transparent border-none text-xs text-[#0F172A] placeholder-[#94A3B8] focus:outline-none w-full"
                      />
                    </div>

                    {/* Students Directory Table */}
                    <div className="bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden shadow-sm">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-[#F8FAFC] border-b border-[#E2E8F0] text-[#64748B] uppercase text-[10px]">
                          <tr>
                            <th className="py-3 px-4">Student ID & Name</th>
                            <th className="py-3 px-4">Target Exam</th>
                            <th className="py-3 px-4">Phone Number</th>
                            <th className="py-3 px-4">Course Enrolled</th>
                            <th className="py-3 px-4 text-right">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#E2E8F0]">
                          {[
                            { id: 'MSP-2026-8842', name: 'Ananya Sharma', target: 'APPSC Group 1', phone: '+91 98765 43210', course: 'Super 50 Mains Integrated' },
                            { id: 'MSP-2026-8843', name: 'K. Suresh Kumar', target: 'APPSC Group 2', phone: '+91 94401 22334', course: 'General Studies Foundation' },
                            { id: 'MSP-2026-8844', name: 'Venkata Ramana', target: 'TGPSC Group 1', phone: '+91 91234 56789', course: 'Telangana Movement Batch' },
                            { id: 'MSP-2026-8845', name: 'Pooja Reddy', target: 'UPSC CSE 2026', phone: '+91 99887 76655', course: 'Prelims + Mains Super 30' },
                            { id: 'MSP-2026-8846', name: 'Mohammed Ali', target: 'TGPSC Group 2', phone: '+91 97001 12233', course: 'Economy & Polity Module' },
                            { id: 'MSP-2026-8847', name: 'Srikanth Naidu', target: 'APPSC Group 1', phone: '+91 98480 99887', course: 'Super 50 Mains Integrated' },
                          ]
                          .filter(s => studentFilter === 'ALL' || s.target.includes(studentFilter))
                          .filter(s => searchQuery === '' || s.name.toLowerCase().includes(searchQuery.toLowerCase()) || s.phone.includes(searchQuery))
                          .map((s, idx) => (
                            <tr key={idx} className="hover:bg-[#F8FAFC] transition-colors">
                              <td className="py-3 px-4 font-bold text-[#0F172A]">
                                <span className="font-mono text-[10px] text-[#94A3B8] block">{s.id}</span>
                                {s.name}
                              </td>
                              <td className="py-3 px-4 text-[#155EEF] font-bold">{s.target}</td>
                              <td className="py-3 px-4 font-mono text-[#64748B]">{s.phone}</td>
                              <td className="py-3 px-4 text-[#334155] font-medium">{s.course}</td>
                              <td className="py-3 px-4 text-right space-x-2">
                                <button onClick={() => alert(`Opening student profile for ${s.name} (${s.id})`)} className="px-2.5 py-1 bg-[#155EEF] hover:bg-[#0F172A] text-white rounded font-bold text-[11px] shadow-sm transition-colors">
                                  Profile
                                </button>
                                <button onClick={() => alert(`Initiating direct SMS/WhatsApp to ${s.phone}`)} className="px-2.5 py-1 bg-[#F8FAFC] hover:bg-[#F1F5F9] text-[#334155] border border-[#E2E8F0] rounded font-bold text-[11px]">
                                  Contact
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* ========================================================================= */}
                {/* 3. SYLLABUS PDF VAULT MANAGER PAGE */}
                {/* ========================================================================= */}
                {sidebarSection === 'syllabus' && (
                  <div className="space-y-6 animate-in fade-in duration-150">
                    <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0]">
                      <div>
                        <h4 className="text-xl font-bold text-[#0F172A]">Syllabus & PDF Vault Repository</h4>
                        <span className="text-xs text-[#64748B]">350 Verified Official Syllabus Breakdown Papers & Answer Keys</span>
                      </div>
                      <button
                        onClick={() => setShowPdfUpload(true)}
                        className="px-4 py-2 bg-[#155EEF] hover:bg-[#0F172A] text-white font-bold text-xs rounded-xl shadow-sm flex items-center gap-1.5 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                        <span>Upload New PDF</span>
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { title: 'APPSC Group 1 Mains GS Paper 1 & 2 Official Syllabus & Key', category: 'APPSC', downloads: '18,420 Downloads', size: '2.4 MB', date: 'Updated Sept 2026' },
                        { title: 'TGPSC Group 1 General Studies & Telangana Movement Detailed Syllabus', category: 'TGPSC', downloads: '16,800 Downloads', size: '3.1 MB', date: 'Updated Aug 2026' },
                        { title: 'UPSC Civil Services Prelims GS Paper 1 Blueprint & Syllabus', category: 'UPSC', downloads: '22,900 Downloads', size: '1.5 MB', date: 'Updated Sept 2026' },
                        { title: 'NCERT Foundation Summary Notes (Class 6 to 12 Integrated)', category: 'FREE VAULT', downloads: '35,100 Downloads', size: '8.5 MB', date: 'Updated July 2026' },
                        { title: 'APPSC Group 2 Services Executive Posts Complete Paper Breakdown', category: 'APPSC', downloads: '14,200 Downloads', size: '2.9 MB', date: 'Updated Sept 2026' },
                        { title: 'TGPSC Group 2 Services Economy & Polity Syllabus Notes', category: 'TGPSC', downloads: '11,500 Downloads', size: '2.1 MB', date: 'Updated Sept 2026' },
                      ].map((pdf, idx) => (
                        <div key={idx} className="p-4 bg-white border border-[#E2E8F0] rounded-2xl flex items-center justify-between hover:border-blue-300 transition-all shadow-sm">
                          <div className="space-y-1 max-w-[70%]">
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-blue-50 text-[#155EEF] border border-blue-200">
                                {pdf.category}
                              </span>
                              <span className="text-[10px] text-[#94A3B8] font-mono">{pdf.date}</span>
                            </div>
                            <h5 className="text-sm font-bold text-[#0F172A] leading-snug">{pdf.title}</h5>
                            <span className="text-xs text-[#64748B] font-mono block">{pdf.downloads} • {pdf.size}</span>
                          </div>

                          <div className="flex gap-2 shrink-0">
                            <button onClick={() => alert(`Editing configuration for ${pdf.title}`)} className="p-2 bg-[#F8FAFC] hover:bg-[#F1F5F9] text-[#155EEF] rounded-lg text-xs font-bold border border-[#E2E8F0]">
                              Edit
                            </button>
                            <button onClick={() => alert(`Downloading ${pdf.title}`)} className="p-2.5 bg-[#155EEF] hover:bg-[#0F172A] text-white rounded-xl text-xs font-bold shadow-sm transition-colors flex items-center gap-1">
                              <Download className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* ========================================================================= */}
                {/* 4. MOCK TEST SERIES ANALYTICS PAGE */}
                {/* ========================================================================= */}
                {sidebarSection === 'tests' && (
                  <div className="space-y-6 animate-in fade-in duration-150">
                    <div className="pb-3 border-b border-[#E2E8F0]">
                      <h4 className="text-xl font-bold text-[#0F172A]">Mock Test Series & Performance Analytics</h4>
                      <span className="text-xs text-[#64748B]">Student score distributions, test completion rates, and rank cards</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="p-5 bg-white border border-[#E2E8F0] rounded-2xl space-y-1 shadow-sm">
                        <span className="text-xs font-bold uppercase text-[#64748B]">APPSC Group 1 Series</span>
                        <span className="text-2xl font-bold text-[#155EEF] block">980 Attempts</span>
                        <span className="text-xs text-[#16A34A] font-bold block">Avg Score: 138/200 (69%)</span>
                      </div>

                      <div className="p-5 bg-white border border-[#E2E8F0] rounded-2xl space-y-1 shadow-sm">
                        <span className="text-xs font-bold uppercase text-[#64748B]">TGPSC Group 2 Series</span>
                        <span className="text-2xl font-bold text-purple-700 block">740 Attempts</span>
                        <span className="text-xs text-purple-700 font-bold block">Avg Score: 144/200 (72%)</span>
                      </div>

                      <div className="p-5 bg-white border border-[#E2E8F0] rounded-2xl space-y-1 shadow-sm">
                        <span className="text-xs font-bold uppercase text-[#64748B]">UPSC CSE GS Series</span>
                        <span className="text-2xl font-bold text-amber-700 block">1,200 Attempts</span>
                        <span className="text-xs text-amber-700 font-bold block">Avg Score: 112/200 (56%)</span>
                      </div>
                    </div>

                    {/* Test Series Ranking List */}
                    <div className="bg-white border border-[#E2E8F0] rounded-2xl p-5 space-y-4 shadow-sm">
                      <h5 className="text-sm font-bold text-[#0F172A]">Latest Test Leaderboard (APPSC Group 1 Grand Test 03)</h5>
                      <div className="space-y-2">
                        {[
                          { rank: '#1', name: 'Ananya Sharma', score: '172 / 200', percentile: '99.9%', time: '1h 45m' },
                          { rank: '#2', name: 'K. Suresh Kumar', score: '168 / 200', percentile: '99.4%', time: '1h 50m' },
                          { rank: '#3', name: 'Venkata Ramana', score: '164 / 200', percentile: '99.1%', time: '1h 52m' },
                        ].map((r, i) => (
                          <div key={i} className="p-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl flex items-center justify-between text-xs">
                            <div className="flex items-center gap-3">
                              <span className="w-8 h-8 rounded-lg bg-amber-50 text-amber-800 border border-amber-200 flex items-center justify-center font-bold">
                                {r.rank}
                              </span>
                              <div>
                                <h6 className="font-bold text-[#0F172A] text-xs">{r.name}</h6>
                                <span className="text-[10px] text-[#64748B]">Percentile: {r.percentile} • Time: {r.time}</span>
                              </div>
                            </div>
                            <span className="font-bold text-[#16A34A] font-mono text-sm">{r.score}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                )}

                {/* ========================================================================= */}
                {/* 5. VIDEO CLASSES & NOTES (STUDENT SPECIFIC) */}
                {/* ========================================================================= */}
                {sidebarSection === 'classes' && (
                  <div className="space-y-6 animate-in fade-in duration-150">
                    <div className="pb-3 border-b border-[#E2E8F0]">
                      <h4 className="text-xl font-bold text-[#0F172A]">Live Video Classes & Digital Notes</h4>
                      <span className="text-xs text-[#64748B]">Recorded faculty lectures, strategy sessions, and micro-notes</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { title: 'Indian Economy & AP Budget Analysis 2026', faculty: 'Krishna Pradeep Sir', duration: '1h 45m', status: 'Available' },
                        { title: 'Telangana History & Movement Core Concepts', faculty: 'Dr. Srinivas Rao', duration: '2h 10m', status: 'Available' },
                        { title: 'UPSC Mains Answer Writing Strategy & Structure', faculty: 'Expert Mentors Panel', duration: '1h 15m', status: 'Live Session' },
                      ].map((vid, idx) => (
                        <div key={idx} className="p-4 bg-white border border-[#E2E8F0] rounded-2xl space-y-3 shadow-sm">
                          <div className="flex items-center justify-between">
                            <span className="px-2 py-0.5 rounded bg-purple-50 text-purple-700 text-[10px] font-bold border border-purple-200">
                              {vid.faculty}
                            </span>
                            <span className="text-[10px] text-[#64748B] font-mono">{vid.duration}</span>
                          </div>
                          <h5 className="text-sm font-bold text-[#0F172A]">{vid.title}</h5>
                          <button onClick={() => alert(`Opening video lesson for: ${vid.title}`)} className="w-full py-2 bg-[#155EEF] hover:bg-[#0F172A] text-white font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-sm transition-colors">
                            <Video className="w-4 h-4" />
                            <span>Watch Class Lecture</span>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* ========================================================================= */}
                {/* 6. CALLBACK LEADS PAGE (ADMIN SPECIFIC) */}
                {/* ========================================================================= */}
                {sidebarSection === 'leads' && (
                  <div className="space-y-6 animate-in fade-in duration-150">
                    <div className="pb-3 border-b border-[#E2E8F0]">
                      <h4 className="text-xl font-bold text-[#0F172A]">Callback Leads & Student Inquiries (42 Pending)</h4>
                      <span className="text-xs text-[#64748B]">Student inquiry forms submitted on MSP website for course admissions</span>
                    </div>

                    <div className="space-y-3">
                      {[
                        { name: 'Venkatesh Rao', phone: '+91 98765 11223', exam: 'APPSC Group 1 Mains Super 50 Batch', time: '10 mins ago', msg: 'Interested in offline test series at Hitec City campus.' },
                        { name: 'Sravani Reddy', phone: '+91 91234 99887', exam: 'TGPSC Group 2 Integrated Course', time: '25 mins ago', msg: 'Wants fee details and timetable for weekend batch.' },
                        { name: 'Anil Kumar', phone: '+91 94411 22334', exam: 'UPSC Civil Services 2026', time: '1 hour ago', msg: 'Asking for 1-on-1 mentorship call with Krishna Pradeep Sir.' },
                        { name: 'G. Madhavi', phone: '+91 97001 55443', exam: 'APPSC Group 2 Prelims Series', time: '2 hours ago', msg: 'Requested Syllabus PDF download link support.' },
                      ].map((lead, idx) => (
                        <div key={idx} className="p-4 bg-white border border-[#E2E8F0] rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <h5 className="text-sm font-bold text-[#0F172A]">{lead.name}</h5>
                              <span className="text-[10px] bg-rose-50 text-rose-700 px-2 py-0.5 rounded font-bold border border-rose-200">
                                {lead.time}
                              </span>
                            </div>
                            <span className="text-xs text-[#155EEF] font-bold block">{lead.exam}</span>
                            <p className="text-xs text-[#475569] italic font-mono">"{lead.msg}"</p>
                            <span className="text-xs text-[#64748B] font-mono block">{lead.phone}</span>
                          </div>

                          <div className="flex gap-2 shrink-0">
                            <button onClick={() => alert(`Calling aspirant ${lead.name} at ${lead.phone}`)} className="px-3.5 py-2 bg-[#DC2626] hover:bg-[#0F172A] text-white font-bold text-xs rounded-xl flex items-center gap-1.5 shadow-sm transition-colors">
                              <PhoneCall className="w-3.5 h-3.5" />
                              <span>Call Aspirant</span>
                            </button>
                            <button onClick={() => alert(`Marked ${lead.name} as Contacted`)} className="px-3.5 py-2 bg-[#F8FAFC] hover:bg-[#F1F5F9] text-[#334155] font-bold text-xs rounded-xl border border-[#E2E8F0]">
                              Mark Done
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* ========================================================================= */}
                {/* 7. ASK MENTOR / DOUBTS (STUDENT SPECIFIC) */}
                {/* ========================================================================= */}
                {sidebarSection === 'doubts' && (
                  <div className="space-y-6 animate-in fade-in duration-150">
                    <div className="pb-3 border-b border-[#E2E8F0]">
                      <h4 className="text-xl font-bold text-[#0F172A]">Ask Mentor / 24/7 Doubt Clearance</h4>
                      <span className="text-xs text-[#64748B]">Direct academic chat support with senior faculty</span>
                    </div>

                    <div className="bg-white border border-[#E2E8F0] p-5 rounded-2xl space-y-4 max-w-xl shadow-sm">
                      <div>
                        <label className="block text-xs font-bold text-[#334155] uppercase mb-1">Select Subject</label>
                        <select className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-2.5 text-xs text-[#0F172A] focus:outline-none focus:border-[#155EEF]">
                          <option>Indian Polity & Constitution (APPSC/UPSC)</option>
                          <option>Economy & AP/Telangana State Development</option>
                          <option>History, Art & Culture</option>
                          <option>Mains Answer Writing Structure</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#334155] uppercase mb-1">Your Question / Doubt Details</label>
                        <textarea rows={4} placeholder="Type your doubt here... e.g. How to structure APPSC Mains GS 2 question on Governor powers?" className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-3 text-xs text-[#0F172A] focus:outline-none focus:border-[#155EEF]"></textarea>
                      </div>

                      <button onClick={() => alert("Doubt submitted! Mentor will reply within 30 minutes.")} className="w-full py-3 bg-[#155EEF] hover:bg-[#0F172A] text-white font-bold text-xs uppercase rounded-xl shadow-sm transition-colors">
                        Submit Doubt to Faculty Panel 🚀
                      </button>
                    </div>
                  </div>
                )}

                {/* ========================================================================= */}
                {/* 8. STUDENT PROFILE & ID CARD */}
                {/* ========================================================================= */}
                {sidebarSection === 'profile' && (
                  <div className="space-y-6 animate-in fade-in duration-150">
                    <div className="pb-3 border-b border-[#E2E8F0]">
                      <h4 className="text-xl font-bold text-[#0F172A]">My Student Digital ID & Account</h4>
                      <span className="text-xs text-[#64748B]">Verified Aspirant Digital Pass</span>
                    </div>

                    <div className="max-w-md bg-white border border-blue-200 p-6 rounded-2xl space-y-4 shadow-md relative overflow-hidden">
                      <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-3">
                        <div>
                          <span className="text-[10px] font-bold text-[#155EEF] uppercase tracking-widest block">MY SYLLABUS PAPER (MSP)</span>
                          <h5 className="text-lg font-bold text-[#0F172A]">{loggedInUser.name}</h5>
                        </div>
                        <span className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200">
                          {loggedInUser.studentId}
                        </span>
                      </div>

                      <div className="space-y-2 text-xs font-mono text-[#475569]">
                        <div>Email: <strong className="text-[#0F172A]">{loggedInUser.email}</strong></div>
                        <div>Target Exam: <strong className="text-[#155EEF]">{loggedInUser.target}</strong></div>
                        <div>Course Enrolled: <strong className="text-[#0F172A]">{loggedInUser.enrolledCourse}</strong></div>
                        <div>Registered Date: <strong className="text-[#64748B]">{loggedInUser.joinDate}</strong></div>
                      </div>

                      <div className="pt-2 flex justify-between items-center text-[10px] text-[#64748B] font-bold border-t border-[#E2E8F0]">
                        <span>HYDERABAD HITEC CITY CAMPUS</span>
                        <span className="text-[#155EEF]">VERIFIED ASPIRANT PASS</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* ========================================================================= */}
                {/* 9. SYSTEM SETTINGS PAGE (ADMIN SPECIFIC) */}
                {/* ========================================================================= */}
                {sidebarSection === 'settings' && (
                  <div className="space-y-6 animate-in fade-in duration-150">
                    <div className="pb-3 border-b border-[#E2E8F0]">
                      <h4 className="text-xl font-bold text-[#0F172A]">System & Portal Settings</h4>
                      <span className="text-xs text-[#64748B]">Configure academy branding, support phone numbers, and security keys</span>
                    </div>

                    <div className="bg-white border border-[#E2E8F0] p-5 rounded-2xl space-y-4 max-w-xl text-xs shadow-sm">
                      <div>
                        <label className="block text-[#334155] font-bold uppercase mb-1">Platform Brand Name</label>
                        <input type="text" defaultValue="MY SYLLABUS PAPER (MSP)" className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-2.5 text-[#0F172A] font-semibold" />
                      </div>
                      <div>
                        <label className="block text-[#334155] font-bold uppercase mb-1">Official Support Email</label>
                        <input type="email" defaultValue="support@mysyllabuspaper.com" className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-2.5 text-[#0F172A] font-semibold" />
                      </div>
                      <div>
                        <label className="block text-[#334155] font-bold uppercase mb-1">Academy Campus Address</label>
                        <input type="text" defaultValue="Plot No. 102, Knowledge Park, Cyber Hills, Hitec City, Hyderabad, Telangana – 500081" className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-2.5 text-[#0F172A] font-semibold" />
                      </div>
                      <button onClick={() => alert("Portal settings updated successfully!")} className="px-5 py-2.5 bg-[#155EEF] hover:bg-[#0F172A] text-white font-bold text-xs rounded-xl uppercase shadow-sm transition-colors">
                        Save Configuration
                      </button>
                    </div>
                  </div>
                )}

              </div>

            </div>
          )}

        </div>

      </div>

      {/* UPLOAD PDF MODAL (LIGHT THEME) */}
      {showPdfUpload && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F172A]/70 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white border border-[#E2E8F0] w-full max-w-md rounded-2xl p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0]">
              <h4 className="text-base font-bold text-[#0F172A]">+ Upload New Syllabus PDF Paper</h4>
              <button onClick={() => setShowPdfUpload(false)} className="text-[#94A3B8] hover:text-[#0F172A]">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddPdf} className="space-y-3 text-xs">
              <div>
                <label className="block text-[#334155] font-bold uppercase mb-1">Paper Title</label>
                <input
                  type="text"
                  required
                  value={newPdf.title}
                  onChange={(e) => setNewPdf({ ...newPdf, title: e.target.value })}
                  placeholder="e.g. APPSC Group 1 Mains GS Paper 2 Key 2026"
                  className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-2.5 text-[#0F172A] focus:outline-none focus:border-[#155EEF]"
                />
              </div>

              <div>
                <label className="block text-[#334155] font-bold uppercase mb-1">Exam Category</label>
                <select
                  value={newPdf.category}
                  onChange={(e) => setNewPdf({ ...newPdf, category: e.target.value })}
                  className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-2.5 text-[#0F172A] focus:outline-none focus:border-[#155EEF]"
                >
                  <option value="APPSC">APPSC</option>
                  <option value="TGPSC">TGPSC</option>
                  <option value="UPSC">UPSC</option>
                  <option value="FREE VAULT">FREE VAULT</option>
                </select>
              </div>

              <div className="pt-3 flex gap-2">
                <button type="submit" className="flex-1 py-2.5 bg-[#155EEF] hover:bg-[#0F172A] text-white font-bold rounded-xl uppercase shadow-sm transition-colors">
                  Upload PDF Now
                </button>
                <button type="button" onClick={() => setShowPdfUpload(false)} className="px-4 py-2.5 bg-[#E2E8F0] text-[#334155] rounded-xl font-bold hover:bg-[#CBD5E1]">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}

