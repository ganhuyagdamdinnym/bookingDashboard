export type BookingStatus = "pending" | "confirmed" | "completed" | "cancelled";

export type Booking = {
  id: string;
  customerName: string;
  serviceName: string;
  email: string;
  date: string; // ISO
  time: string; // HH:mm
  status: BookingStatus;
  amountMnt: number;
};

export type AdminService = {
  id: string;
  name: string;
  category: string;
  durationMinutes: number;
  priceMnt: number;
  active: boolean;
};

export type AdminUser = {
  id: string;
  name: string;
  email: string;
  role: "admin" | "staff" | "viewer";
  createdAt: string;
};
