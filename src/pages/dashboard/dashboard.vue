<template>
  <div class="bbg2 flex text-[var(--mainColor)]">
    <!-- Sidebar -->
    <div
      class="w-64 bbg  p-4 space-y-6 absolute h-[130%]"
    >
      <div class="flex items-center space-x-3">
        <img
          src="../../assets/myPhoto.jpg"
          class="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 me"
        />
        <div>
          <h2 class="text-xl font-bold">Dashboard</h2>
          <p class="text-indigo-200 text-sm">Mohammad Falah</p>
        </div>
      </div>

      <nav>
        <ul class="space-y-2">
          <li
            v-for="item in menuItems"
            :key="item.name"
            class="p-2 hover:bg-gray-900 rounded-md cursor-pointer flex items-center"
          >
            <span class="mr-2"></span>
            {{ item.name }}
          </li>
        </ul>
      </nav>
    </div>

    <!-- Main Content -->
    <div class="ml-64 flex-1 p-6">
      <!-- Header -->
      <header
        class="bbg rounded-xl shadow p-4 mb-6 flex justify-between items-center"
      >
        <h1 class="text-2xl font-bold ">Dashboard Overview</h1>
        <div class="flex items-center space-x-4">
          <div class="relative">
            <input
              type="text"
              placeholder="Search..."
              class="pl-10 pr-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
            <span class="absolute left-3 top-2.5">🔍</span>
          </div>
        </div>
      </header>

      <!-- Stats Cards -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6 "
      >
        <div
          v-for="stat in stats"
          :key="stat.title"
          class="bbg p-6 rounded-xl shadow"
        >
          <div class="flex justify-between items-center">
            <div>
              <p class="text-gray-200">{{ stat.title }}</p>
              <p class="text-3xl font-bold mt-2">{{ stat.value }}</p>
            </div>
            <div class="p-3 rounded-lg bg-indigo-100 text-indigo-600">
              {{ stat.icon }}
            </div>
          </div>
          <div class="mt-4 flex items-center text-sm" :class="stat.trendColor">
            {{ stat.trend }} {{ stat.trendValue }}
          </div>
        </div>
      </div>

      <!-- Charts Section -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 ">
        <div class="bbg p-6 rounded-xl shadow">
          <h3 class="text-lg font-semibold mb-4">Performance Chart</h3>
          <div class="bbg border rounded-xl w-full h-64 p-4">
            <canvas ref="chartRef" class="w-full h-full"></canvas>
          </div>
        </div>
        <div class="bbg p-6 rounded-xl shadow">
          <h3 class="text-lg font-semibold mb-4">Activity Feed</h3>
          <div class="space-y-4">
            <div
              v-for="activity in activities"
              :key="activity.id"
              class="flex items-start"
            >
              <img
                src="../../assets/profile.jpg"
                class="border-2 border-dashed rounded-full w-10 h-10 mr-3"
              />
              <div>
                <p class="font-medium">{{ activity.user }}</p>
                <p class="text-gray-100">{{ activity.action }}</p>
                <p class="text-gray-300 text-sm">{{ activity.time }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Recent Orders -->
      <div class="bbg rounded-xl shadow p-6">
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-lg font-semibold">Recent Orders</h3>
          <button class="text-indigo-600 hover:text-indigo-800">
            View All →
          </button>
        </div>
        <table class="w-full text-left">
          <thead class="text-gray-300 border-b">
            <tr>
              <th class="pb-3">Order ID</th>
              <th class="pb-3">Customer</th>
              <th class="pb-3">Date</th>
              <th class="pb-3">Amount</th>
              <th class="pb-3">Status</th>
            </tr>
          </thead>
          <tbody class="divide-y ">
            <tr v-for="order in orders" :key="order.id">
              <td class="py-4 font-medium">#{{ order.id }}</td>
              <td class="py-4">{{ order.customer }}</td>
              <td class="py-4 text-gray-100">{{ order.date }}</td>
              <td class="py-4 font-medium">${{ order.amount }}</td>
              <td class="py-4">
                <span
                  :class="statusClasses[order.status]"
                  class="px-3 py-1 rounded-full text-sm"
                >
                  {{ order.status }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Chart from "chart.js/auto";

const chartRef = ref(null);
const menuItems = ref([
  { name: "Dashboard" },
  { name: "Analytics" },
  { name: "Inventory" },
  { name: "Customers" },
  { name: "Orders" },
  { name: "Settings" },
]);

const stats = ref([
  {
    title: "Total Revenue",
    value: "$45,231",
    icon: "💰",
    trend: "↑",
    trendValue: "20.1% from last month",
    trendColor: "text-green-500",
  },
  {
    title: "Subscriptions",
    value: "+2,350",
    icon: "👥",
    trend: "↑",
    trendValue: "180.1% from last month",
    trendColor: "text-green-500",
  },
  {
    title: "Sales",
    value: "12,234",
    icon: "🛒",
    trend: "↓",
    trendValue: "12% from last month",
    trendColor: "text-red-500",
  },
  {
    title: "Active Now",
    value: "573",
    icon: "👁️",
    trend: "↑",
    trendValue: "5% since last hour",
    trendColor: "text-green-500",
  },
]);

const activities = ref([
  {
    id: 1,
    user: "Alex Johnson",
    action: "placed a new order",
    time: "2 minutes ago",
  },
  {
    id: 2,
    user: "Sarah Miller",
    action: "completed payment",
    time: "24 minutes ago",
  },
  {
    id: 3,
    user: "Michael Chen",
    action: "created new account",
    time: "1 hour ago",
  },
]);

const orders = ref([
  {
    id: 3124,
    customer: "John Doe",
    date: "Jun 23, 2023",
    amount: 316,
    status: "Completed",
  },
  {
    id: 3125,
    customer: "Jane Smith",
    date: "Jun 24, 2023",
    amount: 242,
    status: "Pending",
  },
  {
    id: 3126,
    customer: "Robert Brown",
    date: "Jun 24, 2023",
    amount: 152,
    status: "Failed",
  },
]);

const statusClasses = {
  Completed: "bg-green-100 text-green-800",
  Pending: "bg-yellow-100 text-yellow-800",
  Failed: "bg-red-100 text-red-800",
};

onMounted(() => {
  const ctx = chartRef.value.getContext("2d");
  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "Performance",
          data: [65, 59, 80, 81, 56, 70],
          borderColor: "#3b82f6",
          backgroundColor: "rgba(59, 130, 246, 0.2)",
          tension: 0.3,
          fill: true,
          pointRadius: 5,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});
</script>

<style>
body {
  margin: 0;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    sans-serif;
}
canvas {
  width: 100% !important;
  height: 100% !important;
}
</style>
