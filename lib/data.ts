import type { AdminService, AdminUser, Booking } from "../types";

export const bookings: Booking[] = [
  {
    id: "BK-1042",
    customerName: "Anu B.",
    email: "anu@example.com", // Дэлгэрэнгүй хуудсанд хэрэгтэй
    serviceName: "IELTS Speaking 1-on-1",
    date: "2026-01-14",
    time: "10:30",
    status: "confirmed",
    amountMnt: 120000,
  },
  {
    id: "BK-1041",
    customerName: "Tuvshin G.",
    email: "tuvshoo@example.com",
    serviceName: "Haircut & Styling",
    date: "2026-01-14",
    time: "09:00",
    status: "completed",
    amountMnt: 35000,
  },
  {
    id: "BK-1040",
    customerName: "Saruul E.",
    email: "saruul@example.com",
    serviceName: "Yoga Private Session",
    date: "2026-01-13",
    time: "18:00",
    status: "pending",
    amountMnt: 60000,
  },
  {
    id: "BK-1039",
    customerName: "Bataa D.",
    email: "bataa@example.com",
    serviceName: "Business Consultation",
    date: "2026-01-13",
    time: "11:00",
    status: "cancelled",
    amountMnt: 0,
  },
];

export const services: AdminService[] = [
  {
    id: "1",
    name: "IELTS Speaking 1-on-1",
    category: "Education",
    durationMinutes: 60,
    priceMnt: 40000,
    active: true,
  },
  {
    id: "2",
    name: "Haircut & Styling",
    category: "Grooming",
    durationMinutes: 45,
    priceMnt: 35000,
    active: true,
  },
  {
    id: "3",
    name: "Yoga Private Session",
    category: "Wellness",
    durationMinutes: 75,
    priceMnt: 60000,
    active: false,
  },
];

export const users: AdminUser[] = [
  {
    id: "U-1",
    name: "Admin User",
    email: "admin@example.com",
    role: "admin",
    createdAt: "2025-12-01",
    // Visual placeholder-т зориулав
  },
  {
    id: "U-2",
    name: "Front Desk",
    email: "frontdesk@example.com",
    role: "staff",
    createdAt: "2025-12-10",
  },
  {
    id: "U-3",
    name: "Manager",
    email: "manager@example.com",
    role: "viewer",
    createdAt: "2025-12-20",
  },
];

// Туслах функцууд
export const getBookingById = (id: string) => bookings.find((b) => b.id === id);
export const getServiceById = (id: string) => services.find((s) => s.id === id);
export const getUserByEmail = (email: string) =>
  users.find((u) => u.email === email);
