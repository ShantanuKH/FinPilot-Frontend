import {
  useEffect,
  useState,
} from "react";

import { Outlet } from "react-router-dom";

import Sidebar from "@/components/layout/sidebar/Sidebar";
import Navbar from "@/components/layout/navbar/Navbar";

import FloatingAi from "@/features/ai/components/FloatingAi/FloatingAi";

import FeedbackModal from "@/features/feedback/components/FeedbackModal";

import { useCurrentUser } from "@/features/auth/hooks/useCurrentUser";

const DashboardLayout = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] =
    useState(false);

  const [isMobileSidebarOpen, setIsMobileSidebarOpen] =
    useState(false);

  const [isFeedbackOpen, setIsFeedbackOpen] =
    useState(false);

  const user = useCurrentUser();

  /**
   * Close mobile sidebar when pressing Escape.
   */
  useEffect(() => {
    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        setIsMobileSidebarOpen(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, []);

  /**
   * Prevent background scrolling
   * while mobile sidebar is open.
   */
  useEffect(() => {
    if (
      isMobileSidebarOpen ||
      isFeedbackOpen
    ) {
      document.body.style.overflow =
        "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [
    isMobileSidebarOpen,
    isFeedbackOpen,
  ]);

  const handleDesktopSidebarToggle = () => {
    setIsSidebarCollapsed(
      (previous) => !previous
    );
  };

  const handleMobileSidebarToggle = () => {
    setIsMobileSidebarOpen(
      (previous) => !previous
    );
  };

  const handleMobileNavigation = () => {
    setIsMobileSidebarOpen(false);
  };

  const handleOpenFeedback = () => {
    setIsMobileSidebarOpen(false);
    setIsFeedbackOpen(true);
  };

  const handleCloseFeedback = () => {
    setIsFeedbackOpen(false);
  };

  const userName = [
    user?.firstName,
    user?.lastName,
  ]
    .filter(Boolean)
    .join(" ");

  const userEmail =
    "email" in (user ?? {})
      ? (
          user as {
            email?: string;
          }
        ).email ?? ""
      : "";

  return (
    <div className="min-h-screen bg-background">

      {/* =====================================
          Sidebar
          ===================================== */}

      <Sidebar
        isCollapsed={isSidebarCollapsed}
        isMobileOpen={isMobileSidebarOpen}
        onToggle={
          handleDesktopSidebarToggle
        }
        onNavigate={
          handleMobileNavigation
        }
        onFeedback={
          handleOpenFeedback
        }
      />

      {/* =====================================
          Mobile Overlay
          ===================================== */}

      {isMobileSidebarOpen && (
        <button
          type="button"
          aria-label="Close navigation"
          onClick={() =>
            setIsMobileSidebarOpen(false)
          }
          className="
            fixed
            inset-0
            z-40
            bg-slate-950/40
            backdrop-blur-[2px]
            md:hidden
          "
        />
      )}

      {/* =====================================
          Main Application
          ===================================== */}

      <div
        className={`
          min-h-screen
          transition-[margin]
          duration-300
          ease-in-out

          ${
            isSidebarCollapsed
              ? "md:ml-[76px]"
              : "md:ml-[260px]"
          }
        `}
      >

        {/* ===================================
            Navbar
            =================================== */}

        <header
          className="
            sticky
            top-0
            z-30
            h-20
            border-b
            border-border
            bg-background/90
            px-4
            backdrop-blur-md
            sm:px-6
            lg:px-8
          "
        >
          <Navbar
            onMenuClick={
              handleMobileSidebarToggle
            }
          />
        </header>

        {/* ===================================
            Page Content
            =================================== */}

        <main
          className="
            min-w-0
            px-4
            py-6
            sm:px-6
            sm:py-8
            lg:px-8
          "
        >
          <Outlet />
        </main>
      </div>

      {/* =====================================
          Floating AI Assistant
          ===================================== */}

      <FloatingAi />

      {/* =====================================
          Feedback Modal
          ===================================== */}

      <FeedbackModal
        isOpen={isFeedbackOpen}
        onClose={
          handleCloseFeedback
        }
        userName={userName}
        userEmail={userEmail}
      />

    </div>
  );
};

export default DashboardLayout;