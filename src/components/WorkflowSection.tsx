import { motion, AnimatePresence } from 'motion/react';
import { useInView } from './hooks/useInView';
import { ArrowRight, CheckCircle, Cloud, Cpu, Zap, BarChart3, TrendingUp, Activity, Clock, Calendar, MoreHorizontal } from 'lucide-react';
import { useState, useEffect } from 'react';

const workflows = [
  {
    title: 'Workflow Optimization',
    description: 'Customized ServiceNow Solutions tailored to your unique business objectives. Our comprehensive implementation approach ensures every workflow is optimized for maximum efficiency.',
    cta: 'Start Journey',
    align: 'left' as const,
    visual: 'kanban' as const,
  },
  {
    title: 'Digital Transformation',
    description: 'Leverage cutting-edge technologies and proven methodologies to modernize your enterprise. We guide you through every phase of your digital evolution with expert precision.',
    cta: 'Get Service',
    align: 'right' as const,
    visual: 'transformation' as const,
  },
  {
    title: 'Managed Support',
    description: 'Enhanced efficiency through ongoing optimization and dedicated support. Our team ensures your ServiceNow platform continues to deliver value long after implementation.',
    cta: 'Get Support',
    align: 'left' as const,
    visual: 'monitor' as const,
  },
  {
    title: 'Advisory & Consulting',
    description: 'Strategic guidance for successful navigation of your ServiceNow journey. Partner with experts who understand both the platform and your business challenges.',
    cta: 'Get Consultation',
    align: 'right' as const,
    visual: 'consulting' as const,
  },
];

interface WorkflowSectionProps {
  onNavigate?: (page: string) => void;
}

export function WorkflowSection({ onNavigate }: WorkflowSectionProps) {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#F8FAFC] py-16 lg:py-[120px]">
      {/* Modern Enterprise Background - Soft Radial Gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-[#F8FAFC] to-[#E5E9F0]" />
      </div>

      {/* Inner Glow Vignette */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2ECC71]/[0.02] via-transparent to-[#2ECC71]/[0.02]" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        {workflows.map((workflow, index) => (
          <WorkflowItem
            key={workflow.title}
            workflow={workflow}
            index={index}
            isInView={isInView}
            isLast={index === workflows.length - 1}
            onNavigate={onNavigate}
          />
        ))}
      </div>
    </section>
  );
}

function WorkflowItem({
  workflow,
  index,
  isInView,
  isLast,
  onNavigate
}: {
  workflow: typeof workflows[0];
  index: number;
  isInView: boolean;
  isLast: boolean;
  onNavigate?: (page: string) => void;
}) {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${!isLast ? 'mb-16 lg:mb-32' : ''}`}
    >
      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: workflow.align === 'left' ? -40 : 40 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{
          duration: 0.6,
          delay: index * 0.15,
          ease: [0.22, 1, 0.36, 1]
        }}
        className={`lg:col-span-5 space-y-6 ${workflow.align === 'right' ? 'lg:order-2' : ''}`}
      >
        <h3 className="text-[#0E2A47] font-bold text-3xl lg:text-[40px] leading-tight">
          {workflow.title}
        </h3>

        <p className="text-[#64748B] leading-relaxed text-base lg:text-lg">
          {workflow.description}
        </p>

        <motion.button
          whileHover={{
            y: -2,
            boxShadow: '0 12px 24px -8px rgba(46, 204, 113, 0.4)'
          }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onNavigate?.('contact')}
          className="bg-gradient-to-r from-[#2ECC71] to-[#27AE60] text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 group text-base transition-all duration-400 ease-out"
        >
          {workflow.cta}
          <ArrowRight className="w-5 h-5 transition-transform duration-300 ease-out group-hover:translate-x-1" />
        </motion.button>
      </motion.div>

      {/* Visual */}
      <motion.div
        initial={{ opacity: 0, x: workflow.align === 'left' ? 40 : -40 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{
          duration: 0.6,
          delay: index * 0.15 + 0.1,
          ease: [0.22, 1, 0.36, 1]
        }}
        className={`lg:col-span-7 ${workflow.align === 'right' ? 'lg:order-1' : ''}`}
      >
        {workflow.visual === 'kanban' && <KanbanVisual isInView={isInView} delay={index * 0.15} />}
        {workflow.visual === 'transformation' && <TransformationVisual isInView={isInView} delay={index * 0.15} />}
        {workflow.visual === 'monitor' && <MonitorVisual isInView={isInView} delay={index * 0.15} />}
        {workflow.visual === 'consulting' && <ConsultingVisual isInView={isInView} delay={index * 0.15} />}
      </motion.div>
    </div>
  );
}

// Premium Kanban Dashboard
function KanbanVisual({ isInView, delay }: { isInView: boolean; delay: number }) {
  const [expandedCol, setExpandedCol] = useState<string | null>('todo'); // Mobile accordion state
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsLargeScreen(window.innerWidth >= 1024);
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  const columns = [
    {
      id: 'todo',
      name: 'To Do',
      color: '#64748B',
      tasks: [
        { title: 'CMDB Config', priority: 'High', date: 'Oct 24', tagColor: 'text-red-600 bg-red-50' },
        { title: 'User Roles', priority: 'Med', date: 'Oct 26', tagColor: 'text-orange-600 bg-orange-50' }
      ]
    },
    {
      id: 'progress',
      name: 'In Progress',
      color: '#3B82F6',
      tasks: [
        { title: 'SSO Setup', priority: 'High', date: 'Oct 25', tagColor: 'text-red-600 bg-red-50' }
      ]
    },
    {
      id: 'done',
      name: 'Done',
      color: '#2ECC71',
      tasks: [
        { title: 'Data Audit', priority: 'Low', date: 'Oct 20', tagColor: 'text-blue-600 bg-blue-50' },
        { title: 'Plugin Install', priority: 'Med', date: 'Oct 21', tagColor: 'text-orange-600 bg-orange-50' }
      ]
    }
  ];

  const toggleColumn = (colId: string) => {
    if (window.innerWidth < 1024) {
      setExpandedCol(expandedCol === colId ? null : colId);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, rotateY: -5, scale: 0.95 }}
      animate={isInView ? { opacity: 1, rotateY: 0, scale: 1 } : {}}
      transition={{ duration: 0.8, delay: delay + 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
      style={{ perspective: '2000px' }}
    >
      <div
        className="relative w-full bg-white rounded-2xl md:rounded-3xl border border-[#E2E8F0] overflow-hidden"
        style={{
          transform: 'rotateY(-5deg)',
          transformStyle: 'preserve-3d',
          boxShadow: '0 25px 50px -12px rgba(14, 42, 71, 0.12), 0 0 0 1px rgba(14, 42, 71, 0.05)',
        }}
      >
        {/* Enterprise Dashboard Header */}
        <div className="bg-white border-b border-[#E2E8F0] p-4 md:p-6">
          {!isLargeScreen ? (
            /* Mobile Header (< lg) */
            <div className="block">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-[#0E2A47] font-bold text-sm">ServiceNow Implementation</h3>
                <MoreHorizontal className="text-slate-400 w-4 h-4" />
              </div>
              <div className="text-[#64748B] text-[11px] font-medium flex items-center gap-2 mb-3">
                <span>SN-2024-88</span>
                <span className="w-1 h-1 rounded-full bg-slate-300" />
                <span>24 items</span>
                <span className="w-1 h-1 rounded-full bg-slate-300" />
                <span className="text-[#2ECC71] font-bold">76%</span>
              </div>
              <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: '76%' } : {}}
                  transition={{ duration: 1, delay: delay + 0.5 }}
                  className="h-full bg-gradient-to-r from-[#2ECC71] to-[#27AE60]"
                />
              </div>
            </div>
          ) : (
            /* Desktop/Tablet Header (>= lg) */
            <div className="block">
              <div className="flex items-center justify-between">
                {/* Left: Title */}
                <div className="flex-shrink-0">
                  <h3 className="text-[#0E2A47] font-bold text-lg">ServiceNow Implementation</h3>
                </div>

                {/* Center: Meta */}
                <div className="flex items-center gap-6 text-sm text-[#64748B] border-x border-[#E2E8F0] px-6 mx-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#2ECC71] animate-pulse"></span>
                    <span className="font-medium">SN-2024-88</span>
                  </div>
                  <div className="font-medium">
                    <span className="text-[#0E2A47] font-bold">24</span> Items
                  </div>
                </div>

                {/* Right: Progress & Menu */}
                <div className="flex items-center gap-4 flex-1 justify-end">
                  <div className="flex flex-col items-end w-48">
                    <div className="flex justify-between w-full mb-1 text-xs">
                      <span className="font-semibold text-slate-500">Sprint Progress</span>
                      <span className="font-bold text-[#2ECC71]">76%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: '76%' } : {}}
                        transition={{ duration: 1, delay: delay + 0.5 }}
                        className="h-full bg-gradient-to-r from-[#2ECC71] to-[#27AE60]"
                      />
                    </div>
                  </div>
                  <MoreHorizontal className="text-slate-400 w-5 h-5 cursor-pointer hover:text-[#0E2A47]" />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Kanban Board Area */}
        <div className="bg-[#F8FAFC] p-4 lg:p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {columns.map((column, colIdx) => (
              <div key={column.id} className="flex flex-col h-full bg-transparent lg:bg-transparent rounded-xl">
                {/* Column Header */}
                <div
                  className="flex items-center justify-between mb-2 cursor-pointer lg:cursor-default"
                  onClick={() => toggleColumn(column.id)}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      {column.name}
                    </span>
                    <span className="bg-white text-slate-600 text-[10px] font-bold px-1.5 py-0.5 rounded border border-slate-200">
                      {column.tasks.length}
                    </span>
                  </div>
                  {/* Mobile Accordion Chevron */}
                  <div className="lg:hidden text-slate-400">
                    <ArrowRight className={`w-3 h-3 transition-transform ${expandedCol === column.id ? 'rotate-90' : ''}`} />
                  </div>
                </div>

                {/* Task Stack */}
                <AnimatePresence>
                  {(window.innerWidth >= 1024 || expandedCol === column.id) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-2 lg:space-y-3"
                    >
                      {column.tasks.map((task, taskIdx) => (
                        <motion.div
                          key={taskIdx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={isInView ? { opacity: 1, y: 0 } : {}}
                          transition={{ delay: delay + 0.3 + (colIdx * 0.1) + (taskIdx * 0.1) }}
                          className="bg-white p-3 lg:p-3 rounded-lg border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow cursor-pointer group w-full"
                        >
                          {/* Desktop: Priority & Date */}
                          <div className="hidden lg:flex justify-between items-center mb-2">
                            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${task.tagColor}`}>
                              {task.priority}
                            </span>
                            <div className="flex items-center text-slate-400 text-[10px]">
                              <Calendar className="w-3 h-3 mr-1" />
                              {task.date}
                            </div>
                          </div>

                          {/* Title */}
                          <div className="flex items-center justify-between lg:block">
                            <div className="text-[#0E2A47] font-semibold text-sm mb-0 lg:mb-2 line-clamp-1">
                              {task.title}
                            </div>
                            {/* Mobile Priority Dot */}
                            <div className={`lg:hidden w-2 h-2 rounded-full flex-shrink-0 ml-2 ${task.priority === 'High' ? 'bg-red-500' : task.priority === 'Med' ? 'bg-orange-500' : 'bg-blue-500'}`} />
                          </div>

                          {/* Desktop Footer */}
                          <div className="hidden lg:flex justify-between items-center">
                            <div className="flex -space-x-1.5">
                              <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-slate-200 border-2 border-white" />
                              {taskIdx === 0 && <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-[#2ECC71] border-2 border-white flex items-center justify-center text-[8px] text-white font-bold">+</div>}
                            </div>
                            {colIdx === 2 && taskIdx === 0 && (
                              <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-[#2ECC71]" />
                            )}
                          </div>
                        </motion.div>
                      ))}
                      {/* Empty Slot Placeholder (Desktop Only) */}
                      {column.tasks.length < 2 && (
                        <div className="hidden lg:flex border border-dashed border-slate-200 rounded-lg h-16 md:h-20 items-center justify-center">
                          <span className="text-slate-300 text-xs">+</span>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Recent Activity Panel */}
        <div className="hidden lg:block bg-white border-t border-[#E2E8F0] p-6">
          <h4 className="font-bold text-[#0E2A47] text-sm mb-4">Recent Activity</h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3 text-sm text-slate-500 bg-[#F8FAFC] p-3 rounded-lg border border-[#F1F5F9]">
              <div className="w-2 h-2 rounded-full bg-[#2ECC71]" />
              <span className="truncate">
                <span className="font-semibold text-[#0E2A47]">Alex</span> moved <span className="font-medium text-[#0E2A47]">SSO Setup</span> to In Progress
              </span>
              <span className="text-xs text-slate-400 ml-auto whitespace-nowrap">2m ago</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-500 bg-[#F8FAFC] p-3 rounded-lg border border-[#F1F5F9]">
              <div className="w-2 h-2 rounded-full bg-blue-400" />
              <span className="truncate">
                <span className="font-semibold text-[#0E2A47]">Sarah</span> updated <span className="font-medium text-[#0E2A47]">User Roles</span> priority
              </span>
              <span className="text-xs text-slate-400 ml-auto whitespace-nowrap">1h ago</span>
            </div>
          </div>
        </div>
      </div>

      {/* Colored drop shadow */}
      <div
        className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[85%] h-16 bg-[#2ECC71]/15 blur-3xl rounded-full pointer-events-none"
      />
    </motion.div>
  );
}

// Digital Transformation Diagram
function TransformationVisual({ isInView, delay }: { isInView: boolean; delay: number }) {
  const milestones = [
    { label: 'Cloud Infrastructure', progress: 100 },
    { label: 'Data Analytics', progress: 78 },
    { label: 'AI Implementation', progress: 45 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: delay + 0.2, ease: 'easeOut' }}
      className="relative"
    >
      <div
        className="relative w-full bg-white rounded-3xl border border-[#E2E8F0] p-5 md:p-8"
        style={{
          boxShadow: '0 25px 50px -12px rgba(14, 42, 71, 0.12), 0 0 0 1px rgba(14, 42, 71, 0.05)'
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E2E8F0]">
          <div>
            <div className="text-lg font-bold text-[#0E2A47]">Transformation Hub</div>
            <div className="text-sm text-[#64748B] mt-1">Digital Evolution Roadmap</div>
          </div>
          <div className="flex -space-x-2">
            {[Cloud, BarChart3, Cpu].map((Icon, i) => (
              <div key={i} className="w-10 h-10 rounded-full bg-[#F8FAFC] border-2 border-white flex items-center justify-center shadow-sm relative z-10">
                <Icon className="w-5 h-5 text-[#2ECC71]" />
              </div>
            ))}
          </div>
        </div>

        {/* Progress Bars */}
        <div className="space-y-6 mb-8">
          {milestones.map((item, idx) => (
            <div key={item.label} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-semibold text-[#0E2A47]">{item.label}</span>
                <span className="text-[#2ECC71] font-bold">{item.progress}%</span>
              </div>
              <div className="h-2 bg-[#F1F5F9] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${item.progress}%` } : {}}
                  transition={{ duration: 1, delay: delay + 0.5 + (idx * 0.2), ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-[#2ECC71] to-[#27AE60] rounded-full"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Status Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: delay + 0.9 }}
            className="bg-[#F8FAFC] p-4 rounded-xl border border-[#E2E8F0]"
          >
            <div className="text-[#64748B] text-xs font-semibold uppercase tracking-wider mb-1">Impact</div>
            <div className="text-[#0E2A47] font-bold text-xl flex items-center gap-2">
              3x
              <span className="text-sm font-normal text-[#64748B]">Faster</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: delay + 1.0 }}
            className="bg-[#F8FAFC] p-4 rounded-xl border border-[#E2E8F0]"
          >
            <div className="text-[#64748B] text-xs font-semibold uppercase tracking-wider mb-1">Efficiency</div>
            <div className="text-[#0E2A47] font-bold text-xl flex items-center gap-2">
              +45%
              <span className="text-sm font-normal text-[#64748B]">Gain</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Colored drop shadow */}
      <div
        className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[85%] h-16 bg-[#2ECC71]/15 blur-3xl rounded-full pointer-events-none"
      />
    </motion.div>
  );
}

// System Health Monitor
function MonitorVisual({ isInView, delay }: { isInView: boolean; delay: number }) {
  const [uptime, setUptime] = useState(0);
  const [responseTime, setResponseTime] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const uptimeInterval = setInterval(() => {
      setUptime(prev => prev < 99.9 ? prev + 0.1 : 99.9);
    }, 20);

    const responseInterval = setInterval(() => {
      setResponseTime(prev => prev < 1.8 ? prev + 0.1 : 1.8);
    }, 30);

    return () => {
      clearInterval(uptimeInterval);
      clearInterval(responseInterval);
    };
  }, [isInView]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: delay + 0.2, ease: 'easeOut' }}
      className="relative"
    >
      <div className="relative w-full bg-white rounded-3xl border border-[#E2E8F0] p-5 lg:p-8" style={{
        boxShadow: '0 25px 50px -12px rgba(14, 42, 71, 0.12), 0 0 0 1px rgba(14, 42, 71, 0.05)'
      }}>
        {/* System Health Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8 pb-4 border-b border-[#E2E8F0] gap-4 lg:gap-0">
          <div className="text-lg font-bold text-[#0E2A47]">System Health</div>
          <motion.div
            animate={{ opacity: [1, 0.6, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#2ECC71]/10 border border-[#2ECC71]/20 w-fit"
          >
            <div className="w-2 h-2 bg-[#2ECC71] rounded-full" />
            <span className="text-[#2ECC71] font-semibold text-sm">All Systems Operational</span>
          </motion.div>
        </div>

        {/* Health Graph */}
        <div className="relative h-48 mb-8 bg-gradient-to-b from-[#F8FAFC] to-white rounded-2xl p-4">
          <svg className="w-full h-full" viewBox="0 0 400 140" preserveAspectRatio="none">
            {/* Grid Lines */}
            {[0, 1, 2, 3, 4].map((i) => (
              <line
                key={i}
                x1="0"
                y1={i * 35}
                x2="400"
                y2={i * 35}
                stroke="#E2E8F0"
                strokeWidth="1"
              />
            ))}

            {/* Performance Line */}
            <motion.path
              d="M 0 120 L 40 110 L 80 95 L 120 85 L 160 70 L 200 55 L 240 45 L 280 35 L 320 25 L 360 20 L 400 15"
              stroke="url(#healthGradient)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 1.5, delay: delay + 0.5, ease: 'easeOut' }}
            />

            {/* Gradient Fill */}
            <motion.path
              d="M 0 120 L 40 110 L 80 95 L 120 85 L 160 70 L 200 55 L 240 45 L 280 35 L 320 25 L 360 20 L 400 15 L 400 140 L 0 140 Z"
              fill="url(#healthFill)"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: delay + 0.8 }}
            />

            <defs>
              <linearGradient id="healthGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#64748B" />
                <stop offset="100%" stopColor="#2ECC71" />
              </linearGradient>
              <linearGradient id="healthFill" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#2ECC71" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#2ECC71" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: delay + 0.9, ease: 'easeOut' }}
            className="bg-gradient-to-br from-[#F8FAFC] to-white p-4 rounded-2xl border border-[#E2E8F0]"
          >
            <div className="text-3xl font-bold text-[#2ECC71] mb-1">
              {uptime.toFixed(1)}%
            </div>
            <div className="text-xs text-[#64748B] font-medium">Uptime</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: delay + 1.0, ease: 'easeOut' }}
            className="bg-gradient-to-br from-[#F8FAFC] to-white p-4 rounded-2xl border border-[#E2E8F0]"
          >
            <div className="text-3xl font-bold text-[#2ECC71] mb-1">24/7</div>
            <div className="text-xs text-[#64748B] font-medium">Monitoring</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: delay + 1.1, ease: 'easeOut' }}
            className="bg-gradient-to-br from-[#F8FAFC] to-white p-4 rounded-2xl border border-[#E2E8F0]"
          >
            <div className="text-3xl font-bold text-[#2ECC71] mb-1">
              &lt;{responseTime.toFixed(1)}min
            </div>
            <div className="text-xs text-[#64748B] font-medium">Response Time</div>
          </motion.div>
        </div>
      </div>

      {/* Colored drop shadow */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[85%] h-16 bg-[#2ECC71]/15 blur-3xl rounded-full pointer-events-none" />
    </motion.div>
  );
}

// Executive Analytics Dashboard
function ConsultingVisual({ isInView, delay }: { isInView: boolean; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: delay + 0.2, ease: 'easeOut' }}
      className="relative"
    >
      <div className="relative w-full bg-white rounded-3xl border border-[#E2E8F0] p-5 md:p-8" style={{
        boxShadow: '0 25px 50px -12px rgba(14, 42, 71, 0.12), 0 0 0 1px rgba(14, 42, 71, 0.05)'
      }}>
        {/* Dashboard Header */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E2E8F0]">
          <div>
            <div className="text-lg font-bold text-[#0E2A47]">Executive Analytics</div>
            <div className="text-sm text-[#64748B] mt-1">Strategic Decision Intelligence</div>
          </div>
          <TrendingUp className="w-8 h-8 text-[#2ECC71]" />
        </div>

        {/* Main Chart Area */}
        <div className="relative h-56 mb-6 bg-gradient-to-b from-[#F8FAFC] to-white rounded-2xl p-6">
          <svg className="w-full h-full" viewBox="0 0 400 180">
            {/* Bar Chart */}
            {[30, 55, 45, 75, 65, 85, 95].map((height, idx) => (
              <motion.rect
                key={idx}
                x={idx * 55 + 10}
                y={180 - height - 20}
                width="40"
                height="0"
                rx="6"
                fill={idx === 6 ? 'url(#barGradient)' : '#E2E8F0'}
                initial={{ height: 0 }}
                animate={isInView ? { height: height } : {}}
                transition={{
                  duration: 0.6,
                  delay: delay + 0.5 + (idx * 0.08),
                  ease: 'easeOut'
                }}
              />
            ))}

            {/* Trend Line */}
            <motion.path
              d="M 30 140 L 85 100 L 140 115 L 195 70 L 250 80 L 305 45 L 360 25"
              stroke="#2ECC71"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="6 4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 0.8 } : {}}
              transition={{ duration: 1.2, delay: delay + 1, ease: 'easeOut' }}
            />

            {/* Data Points */}
            {[30, 85, 140, 195, 250, 305, 360].map((x, idx) => (
              <motion.circle
                key={idx}
                cx={x}
                cy={[140, 100, 115, 70, 80, 45, 25][idx]}
                r="0"
                fill="#2ECC71"
                initial={{ r: 0 }}
                animate={isInView ? { r: 5 } : {}}
                transition={{
                  duration: 0.3,
                  delay: delay + 1.2 + (idx * 0.05),
                  ease: 'easeOut'
                }}
              />
            ))}

            <defs>
              <linearGradient id="barGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#2ECC71" />
                <stop offset="100%" stopColor="#27AE60" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            { label: 'ROI', value: '+245%', trend: 'up' },
            { label: 'Efficiency', value: '+87%', trend: 'up' },
            { label: 'Cost Reduction', value: '32%', trend: 'up' },
            { label: 'Time Saved', value: '1.2k hrs', trend: 'up' },
          ].map((metric, idx) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.4,
                delay: delay + 1.3 + (idx * 0.08),
                ease: 'easeOut'
              }}
              className="bg-gradient-to-br from-[#F8FAFC] to-white p-4 rounded-xl border border-[#E2E8F0] text-center"
            >
              <div className="text-xl font-bold text-[#2ECC71] mb-1">{metric.value}</div>
              <div className="text-xs text-[#64748B] font-medium">{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Colored drop shadow */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[85%] h-16 bg-[#2ECC71]/15 blur-3xl rounded-full pointer-events-none" />
    </motion.div>
  );
}