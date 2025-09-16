import { create } from "zustand";

export interface PanelData {
  id: number;
  title: string;
  slug: string;
  angle: number; // 角度 (度)
  content: {
    title: string;
    description: string;
    image?: string;
  };
}

export interface RingState {
  currentPanel: number;
  targetAngle: number;
  isAnimating: boolean;
  panels: PanelData[];
  setCurrentPanel: (panel: number) => void;
  setTargetAngle: (angle: number) => void;
  setIsAnimating: (animating: boolean) => void;
  goToPanel: (panel: number) => void;
  goToNext: () => void;
  goToPrevious: () => void;
}

const PANEL_DATA: PanelData[] = [
  {
    id: 0,
    title: "首頁",
    slug: "home",
    angle: 0,
    content: {
      title: "立麥餐飲設備",
      description: "最專業的酒店廚房規劃顧問",
      image: "/images/design2.jpeg",
    },
  },
  {
    id: 1,
    title: "關於我們",
    slug: "about",
    angle: 72,
    content: {
      title: "About Us",
      description: "我們專注於台灣尖端的餐飲規劃設計顧問角色",
      image: "/images/team.jpeg",
    },
  },
  {
    id: 2,
    title: "代理商",
    slug: "agent",
    angle: 144,
    content: {
      title: "Our Agents",
      description: "我們的專業代理商團隊",
      image: "/images/agents.jpeg",
    },
  },
  {
    id: 3,
    title: "專案案例",
    slug: "projects",
    angle: 216,
    content: {
      title: "Our Projects",
      description: "我們專司於整合整體餐飲空間",
      image: "/images/construction.jpeg",
    },
  },
  {
    id: 4,
    title: "人才招募",
    slug: "recruitment",
    angle: 288,
    content: {
      title: "Recruitment",
      description: "加入我們的團隊",
      image: "/images/design.jpeg",
    },
  },
];

export const useRingStore = create<RingState>((set, get) => ({
  currentPanel: 0,
  targetAngle: 0,
  isAnimating: false,
  panels: PANEL_DATA,

  setCurrentPanel: (panel: number) => {
    const { panels } = get();
    const targetAngle = panels[panel]?.angle || 0;
    set({
      currentPanel: panel,
      targetAngle,
      isAnimating: true,
    });
  },

  setTargetAngle: (angle: number) => {
    set({ targetAngle: angle });
  },

  setIsAnimating: (animating: boolean) => {
    set({ isAnimating: animating });
  },

  goToPanel: (panel: number) => {
    const { setCurrentPanel } = get();
    setCurrentPanel(panel);

    // 更新 URL hash
    const { panels } = get();
    const slug = panels[panel]?.slug || "home";
    if (typeof window !== "undefined") {
      window.location.hash = slug;
    }
  },

  goToNext: () => {
    const { currentPanel, panels, goToPanel } = get();
    const nextPanel = (currentPanel + 1) % panels.length;
    goToPanel(nextPanel);
  },

  goToPrevious: () => {
    const { currentPanel, panels, goToPanel } = get();
    const prevPanel = (currentPanel - 1 + panels.length) % panels.length;
    goToPanel(prevPanel);
  },
}));
