import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ComputerIcon from '@mui/icons-material/Computer';
import ErrorIcon from '@mui/icons-material/Error';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import SettingsIcon from '@mui/icons-material/Settings';
import CurrentStatusIndex from "../pages/currentStatus/CurrentStatusIndex";
import CurrentStatusPageLayout from "../pages/currentStatus/CurrentStatusPageLayout";
import HostGroup from "../pages/currentStatus/HostGroup";
import HostGroupGrid from "../pages/currentStatus/HostGroupGrid";
import HostGroupSummary from "../pages/currentStatus/HostGroupSummary";
import Hosts from "../pages/currentStatus/Hosts";
import MapLegacy from "../pages/currentStatus/MapLegacy";
import ServiceGroup from "../pages/currentStatus/ServiceGroup";
import ServiceGroupGrid from "../pages/currentStatus/ServiceGroupGrid";
import ServiceGroupSummary from "../pages/currentStatus/ServiceGroupSummary";
import Services from "../pages/currentStatus/Services";
import TacticalOverviewPage from "../pages/currentStatus/TacticalOverviewPage";
import GeneralDocumentaionPage from "../pages/general/GeneralDocumentationPage";
import GeneralHomePage from "../pages/general/GeneralHomePage";
import GeneralIndex from "../pages/general/GeneralIndex";
import GeneralPageLayout from "../pages/general/GeneralPageLayout";
import HomePage from "../pages/home/HomePage";
import HostsPage from "../pages/problems/HostsPage";
import HostsUnhandledPage from "../pages/problems/HostsUnhandledPage";
import NetworkOutagesPages from "../pages/problems/NetworkOutagesPage";
import ProblemsIndexPage from "../pages/problems/ProblemsIndexPage";
import ProblemsLayoutPage from "../pages/problems/ProblemsLayoutPage";
import ServicesPage from "../pages/problems/ServicesPage";
import ServicesUnhandledPage from "../pages/problems/ServicesUnhandledPage";
import ReportAlertsPage from '../pages/reports/ReportAlertsPage';
import ReportHistoryPage from '../pages/reports/ReportHistoryPage';
import ReportSummaryPage from '../pages/reports/ReportSummaryPage';
import ReportTrendsLegacyPage from '../pages/reports/ReportTrendsLegacyPage';
import ReportTrendsPage from '../pages/reports/ReportTrendsPage';
import ReportsHomePage from "../pages/reports/ReportsHomePage";
import ReportsIndex from "../pages/reports/ReportsIndex";
import ReportsPageLayout from "../pages/reports/ReportsPageLayout";
import { RouteType } from "./config";
import ReportHistogramPage from '../pages/reports/ReportHistogramPage';
import ReportHistogramLegacyPage from '../pages/reports/ReportHistogramLegacyPage';
import ReportNotificationPage from '../pages/reports/ReportNotificationPage';
import ReportEventLogPage from '../pages/reports/ReportEventLogPage';
import SystemPageLayout from '../pages/system/SystemPageLayout';
import SystemIndex from '../pages/system/SystemIndex';
import SystemCommentsPage from '../pages/system/SystemCommentsPage';
import SystemDownTimePage from '../pages/system/SystemDownTimePage';
import SystemProcessInfoPage from '../pages/system/SystemProcessInfoPage';
import SystemPerformanceInfoPage from '../pages/system/SystemPerformanceInfoPage';
import SystemSchedulingQueuePage from '../pages/system/SystemSchedulingQueuePage';
import SystemConfigurationPage from '../pages/system/SystemConfigurationPage';

const appRoutes: RouteType[] = [
  {
    index: true,
    element: <HomePage />,
    state: "home",
  },
 
  {
    path: "/general",
    element: <GeneralPageLayout />,
    state: "general",
    sidebarProps: {
      displayText: "General",
      icon: <SettingsIcon />,
    },
    child: [
      {
        index: true,
        element: <GeneralIndex />,
        state: "general.index",
      },
      {
        path: "/general/home",
        element: <GeneralHomePage />,
        state: "general.home",
        sidebarProps: {
          displayText: "Home",
        },
      },
      {
        path: "/general/documentation",
        element: <GeneralDocumentaionPage />,
        state: "general.documentation",
        sidebarProps: {
          displayText: "Documentation",
        },
      },
    ],
  },

  {
    path: "/currentStatus",
    element: <CurrentStatusPageLayout />,
    state: "currentStatus",
    sidebarProps: {
      displayText: "Current Status",
      icon: <CheckCircleIcon />,
    },
    child: [
      {
        index: true,
        element: <CurrentStatusIndex />,
        state: "currentStatus.index",
      },
      {
        path: "/currentStatus/tacticaloverview",
        element: <TacticalOverviewPage />,
        state: "currentStatus.tacticaloverview",
        sidebarProps: {
          displayText: "Tactical Overview",
        },
      },
      {
        path: "/currentStatus/maplegacy",
        element: <MapLegacy />,
        state: "currentStatus.maplegacy",
        sidebarProps: {
          displayText: "Map (Legacy)",
        },
      },

      {
        path: "/currentStatus/hosts",
        element: <Hosts />,
        state: "currentStatus.hosts",
        sidebarProps: {
          displayText: "Hosts",
        },
      },

      {
        path: "/currentStatus/services",
        element: <Services />,
        state: "currentStatus.services",
        sidebarProps: {
          displayText: "Services",
        },
      },

      {
        path: "/currentStatus/hostgroup",
        element: <HostGroup />,
        state: "currentStatus.hostgroup",
        sidebarProps: {
          displayText: "Host Group",
        },
      },

      {
        path: "/currentStatus/hostgroupsummary",
        element: <HostGroupSummary />,
        state: "currentStatus.hostgroupsummary",
        sidebarProps: {
          displayText: "Summary",
        },
      },

      {
        path: "/currentStatus/hostgroupgrid",
        element: <HostGroupGrid />,
        state: "currentStatus.hostgroupgrid",
        sidebarProps: {
          displayText: "Grid",
        },
      },

      {
        path: "/currentStatus/service-group",
        element: <ServiceGroup />,
        state: "currentStatus.service-group",
        sidebarProps: {
          displayText: "Service Groups",
        },
      },

      {
        path: "/currentStatus/service-group-summary",
        element: <ServiceGroupSummary />,
        state: "currentStatus.service-group-summary",
        sidebarProps: {
          displayText: "Summary",
        },
      },

      {
        path: "/currentStatus/service-group-grid",
        element: <ServiceGroupGrid />,
        state: "currentStatus.service-group-grid",
        sidebarProps: {
          displayText: "Grid",
        },
      },

      

    ],
  },


  {
    path: "/problems",
    element: <ProblemsLayoutPage />,
    state: "problems",
    sidebarProps: {
      displayText: "Problems",
      icon: <ErrorIcon />,
    },
    child: [
      {
        index: true,
        element: <ProblemsIndexPage />,
        state: "problem.index",
      },
      {
        path: "/problems/services",
        element: <ServicesPage />,
        state: "problems.services",
        sidebarProps: {
          displayText: "Services",
        },
      },

      {
        path: "/problems/services-unhandled",
        element: <ServicesUnhandledPage />,
        state: "problems.services-unhandled",
        sidebarProps: {
          displayText: "Unhandled",
        },
      },

      {
        path: "/problems/hosts",
        element: <HostsPage />,
        state: "problems.hosts",
        sidebarProps: {
          displayText: "Hosts",
        },
      },

      {
        path: "/problems/hosts-unhandled",
        element: <HostsUnhandledPage />,
        state: "problems.hosts-unhandled",
        sidebarProps: {
          displayText: "Unhandled",
        },
      },

      {
        path: "/problems/networkoutages",
        element: <NetworkOutagesPages />,
        state: "problems.networkoutages",
        sidebarProps: {
          displayText: "Network Outages",
        },
      },

      
    ],
  },


  {
    path: "/reports",
    element: <ReportsPageLayout />,
    state: "general",
    sidebarProps: {
      displayText: "Reports",
      icon: <ReportProblemIcon />,
    },
    child: [
      {
        index: true,
        element: <ReportsIndex />,
        state: "reports.index",
      },
      {
        path: "/reports/availability",
        element: <ReportsHomePage />,
        state: "reports.availability",
        sidebarProps: {
          displayText: "Availability",
        },
      },

      {
        path: "/reports/trends",
        element: <ReportTrendsPage />,
        state: "reports.trends",
        sidebarProps: {
          displayText: "Trends",
        },
      },

      {
        path: "/reports/trends-legacy",
        element: <ReportTrendsLegacyPage />,
        state: "reports.trends-legacy",
        sidebarProps: {
          displayText: "(Legacy)",
        },
      },

      {
        path: "/reports/alert",
        element: <ReportAlertsPage />,
        state: "reports.alert",
        sidebarProps: {
          displayText: "Alerts",
        },
      },
      
      {
        path: "/reports/history",
        element: <ReportHistoryPage />,
        state: "reports.history",
        sidebarProps: {
          displayText: "History",
        },
      },

      {
        path: "/reports/summary",
        element: <ReportSummaryPage />,
        state: "reports.summary",
        sidebarProps: {
          displayText: "Summary",
        },
      },

      {
        path: "/reports/histogram",
        element: <ReportHistogramPage />,
        state: "reports.histogram",
        sidebarProps: {
          displayText: "Histogram",
        },
      },

      {
        path: "/reports/histogram-legacy",
        element: <ReportHistogramLegacyPage />,
        state: "reports.histogram-legacy",
        sidebarProps: {
          displayText: "(Legacy)",
        },
      },

      {
        path: "/reports/notification",
        element: <ReportNotificationPage />,
        state: "reports.notification",
        sidebarProps: {
          displayText: "Notifications",
        },
      },
      
      {
        path: "/reports/eventlog",
        element: <ReportEventLogPage />,
        state: "reports.eventlog",
        sidebarProps: {
          displayText: "Event Log",
        },
      },
    ],
  },

  {
    path: "/system",
    element: <SystemPageLayout />,
    state: "system",
    sidebarProps: {
      displayText: "System",
      icon: <ComputerIcon />,
    },
     child: [
       {
         index: true,
         element: <SystemIndex />,
         state: "system.index",
       },
       {
         path: "/system/comments",
         element: <SystemCommentsPage />,
         state: "system.comments",
         sidebarProps: {
           displayText: "Comments",
         },
       },

       {
        path: "/system/downtime",
        element: <SystemDownTimePage />,
        state: "system.downtime",
        sidebarProps: {
          displayText: "Down Time",
        },
      },

      {
        path: "/system/processinfo",
        element: <SystemProcessInfoPage />,
        state: "system.processinfo",
        sidebarProps: {
          displayText: "Process Info",
        },
      },

      {
        path: "/system/performance-info",
        element: <SystemPerformanceInfoPage />,
        state: "system.performance-info",
        sidebarProps: {
          displayText: "Performance Info",
        },
      },

      {
        path: "/system/scheduling-queue",
        element: <SystemSchedulingQueuePage />,
        state: "system.scheduling-queue",
        sidebarProps: {
          displayText: "Scheduling Queue",
        },
      },

      {
        path: "/system/configuration",
        element: <SystemConfigurationPage />,
        state: "system.configuration",
        sidebarProps: {
          displayText: "Configuration",
        },
      },
      
     ],
  },





];

export default appRoutes;
