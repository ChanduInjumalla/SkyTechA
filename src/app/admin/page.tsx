"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import {
  Package,
  Plus,
  Search,
  Filter,
  Edit2,
  Trash2,
  Users,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  ExternalLink,
  ChevronDown,
  X,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Layers,
  Sparkles,
  ArrowLeft,
  Check,
  Eye,
  RefreshCw,
} from "lucide-react";
import {
  Product,
  INITIAL_PRODUCTS,
  PRODUCT_CATEGORIES,
  LeadInquiry,
  INITIAL_LEADS,
} from "@/content/initialProducts";

const PRESET_IMAGES = [
  { label: "Domal Window", url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" },
  { label: "Slim Window", url: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=800&q=80" },
  { label: "Pivot Glass Door", url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80" },
  { label: "Telescopic Partition", url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80" },
  { label: "Office Glass Wall", url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" },
  { label: "Modular Kitchen", url: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80" },
  { label: "Slim Wardrobe", url: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=800&q=80" },
  { label: "Glass Railing", url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80" },
  { label: "Facade & Cladding", url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" },
];

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState<"products" | "leads" | "overview">("products");
  const [products, setProducts] = useState<Product[]>([]);
  const [leads, setLeads] = useState<LeadInquiry[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All Categories");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Modal states
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [deletingProduct, setDeletingProduct] = useState<Product | null>(null);
  const [viewingProduct, setViewingProduct] = useState<Product | null>(null);

  // Form State for Add / Edit
  const [formData, setFormData] = useState<Partial<Product>>({
    title: "",
    category: "Aluminium Windows",
    price: "",
    specs: "",
    dimensions: "",
    image: PRESET_IMAGES[0].url,
    status: "Made to Order",
    warranty: "10 Years Factory Warranty",
    description: "",
    features: [],
  });
  const [featureInput, setFeatureInput] = useState("");

  // Load from localStorage or initialize
  useEffect(() => {
    try {
      const savedProducts = localStorage.getItem("skytech_admin_products");
      if (savedProducts) {
        setProducts(JSON.parse(savedProducts));
      } else {
        setProducts(INITIAL_PRODUCTS);
        localStorage.setItem("skytech_admin_products", JSON.stringify(INITIAL_PRODUCTS));
      }

      const savedLeads = localStorage.getItem("skytech_admin_leads");
      if (savedLeads) {
        setLeads(JSON.parse(savedLeads));
      } else {
        setLeads(INITIAL_LEADS);
        localStorage.setItem("skytech_admin_leads", JSON.stringify(INITIAL_LEADS));
      }
    } catch {
      setProducts(INITIAL_PRODUCTS);
      setLeads(INITIAL_LEADS);
    }
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const saveProductsToStorage = (updated: Product[]) => {
    setProducts(updated);
    try {
      localStorage.setItem("skytech_admin_products", JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  const saveLeadsToStorage = (updated: LeadInquiry[]) => {
    setLeads(updated);
    try {
      localStorage.setItem("skytech_admin_leads", JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  // Filtered products
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory =
        selectedCategory === "All Categories" || p.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.specs.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [products, selectedCategory, searchQuery]);

  // Open Add Product Modal
  const handleOpenAddModal = () => {
    setEditingProduct(null);
    setFormData({
      title: "",
      category: "Aluminium Windows",
      price: "",
      specs: "",
      dimensions: "",
      image: PRESET_IMAGES[0].url,
      status: "Made to Order",
      warranty: "10 Years Factory Warranty",
      description: "",
      features: [],
    });
    setFeatureInput("");
    setIsAddModalOpen(true);
  };

  // Open Edit Product Modal
  const handleOpenEditModal = (product: Product) => {
    setEditingProduct(product);
    setFormData({
      ...product,
    });
    setFeatureInput("");
    setIsAddModalOpen(true);
  };

  // Save product (Add or Update)
  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.price || !formData.category) {
      alert("Please fill in the Product Title, Category and Price.");
      return;
    }

    const featuresList = featureInput
      ? featureInput.split(",").map((s) => s.trim()).filter(Boolean)
      : formData.features || [];

    if (editingProduct) {
      // Update
      const updated = products.map((p) =>
        p.id === editingProduct.id
          ? ({
              ...p,
              ...formData,
              features: featuresList,
            } as Product)
          : p
      );
      saveProductsToStorage(updated);
      showToast(`Updated "${formData.title}" successfully!`);
    } else {
      // Create
      const newProd: Product = {
        id: `st-custom-${Date.now()}`,
        title: formData.title || "Custom Aluminium System",
        category: formData.category || "Aluminium Windows",
        price: formData.price || "Contact for Quote",
        specs: formData.specs || "Standard Aluminium Specification",
        dimensions: formData.dimensions || "Custom Sizing",
        image: formData.image || PRESET_IMAGES[0].url,
        status: (formData.status as any) || "Made to Order",
        warranty: formData.warranty || "10 Years Warranty",
        description: formData.description || "Architectural aluminium system fabricated at SkyTech Hayathnagar facility.",
        features: featuresList.length > 0 ? featuresList : ["Custom Engineered", "Factory Direct"],
        createdAt: new Date().toISOString().split("T")[0],
      };
      saveProductsToStorage([newProd, ...products]);
      showToast(`Added "${newProd.title}" to catalog!`);
    }

    setIsAddModalOpen(false);
  };

  // Delete product
  const handleConfirmDelete = () => {
    if (!deletingProduct) return;
    const updated = products.filter((p) => p.id !== deletingProduct.id);
    saveProductsToStorage(updated);
    showToast(`Deleted "${deletingProduct.title}"`);
    setDeletingProduct(null);
  };

  // Update lead status
  const handleUpdateLeadStatus = (leadId: string, status: LeadInquiry["status"]) => {
    const updated = leads.map((l) => (l.id === leadId ? { ...l, status } : l));
    saveLeadsToStorage(updated);
    showToast("Lead status updated!");
  };

  // Reset to initial demo catalog
  const handleResetCatalog = () => {
    if (confirm("Reset catalog and leads to default SkyTech products? Any custom additions will be cleared.")) {
      saveProductsToStorage(INITIAL_PRODUCTS);
      saveLeadsToStorage(INITIAL_LEADS);
      showToast("Reset to default SkyTech catalogue.");
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1F1F1F] flex flex-col font-sans pb-16">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#111827] text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-2.5 animate-in slide-in-from-bottom-5 duration-200 text-sm font-medium">
          <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Admin Header Bar */}
      <header className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Left: Branding & Tag */}
            <div className="flex items-center gap-3 sm:gap-4">
              <Link
                href="/"
                className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-black py-1 px-2 rounded-lg bg-gray-50 hover:bg-gray-100 border border-gray-200 transition-colors"
                title="Return to Main Website"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Live Website</span>
              </Link>
              <div className="h-5 w-px bg-gray-200" />
              <div>
                <h1 className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-[#111827] flex items-center gap-2">
                  <span>SkyTech</span>
                  <span className="text-[#E23744]">Aluminium</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-100 text-[#E23744] uppercase tracking-wider">
                    Admin
                  </span>
                </h1>
                <p className="text-[11px] text-gray-500 hidden sm:block">
                  Hayathnagar Fabrication &amp; Catalog Management Portal
                </p>
              </div>
            </div>

            {/* Right: Quick Action Buttons */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                type="button"
                onClick={handleResetCatalog}
                className="p-2 sm:px-3 sm:py-2 text-xs text-gray-600 hover:text-gray-900 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 flex items-center gap-1.5 transition-colors"
                title="Reset to default items"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Reset Defaults</span>
              </button>

              <button
                type="button"
                onClick={handleOpenAddModal}
                className="flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 bg-[#E23744] hover:bg-[#C92531] text-white text-xs sm:text-sm font-semibold rounded-full shadow-md shadow-red-500/20 active:scale-95 transition-all"
              >
                <Plus className="w-4 h-4" />
                <span>Add Product</span>
              </button>
            </div>
          </div>

          {/* Navigation Tabs Bar */}
          <div className="flex items-center gap-2 border-t border-gray-100 overflow-x-auto py-2 -mb-px">
            <button
              onClick={() => setActiveTab("products")}
              className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap ${
                activeTab === "products"
                  ? "bg-[#111827] text-white"
                  : "text-gray-600 hover:text-black hover:bg-gray-100"
              }`}
            >
              <Package className="w-4 h-4" />
              <span>Products &amp; Catalog ({products.length})</span>
            </button>

            <button
              onClick={() => setActiveTab("leads")}
              className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap ${
                activeTab === "leads"
                  ? "bg-[#111827] text-white"
                  : "text-gray-600 hover:text-black hover:bg-gray-100"
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Quotes &amp; Inquiries ({leads.length})</span>
            </button>

            <button
              onClick={() => setActiveTab("overview")}
              className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap ${
                activeTab === "overview"
                  ? "bg-[#111827] text-white"
                  : "text-gray-600 hover:text-black hover:bg-gray-100"
              }`}
            >
              <TrendingUp className="w-4 h-4" />
              <span>Metrics &amp; Overview</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Admin Content Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 w-full flex-1">
        {/* ================= TAB 1: PRODUCTS ================= */}
        {activeTab === "products" && (
          <div className="space-y-6">
            {/* Search & Filter Toolbar */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-200/80 shadow-xs flex flex-col md:flex-row gap-3.5 items-stretch md:items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search products by title, specification or specs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#E23744]/20 focus:border-[#E23744]"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Category Filter Chips / Dropdown */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
                <Filter className="w-3.5 h-3.5 text-gray-400 shrink-0 hidden sm:inline" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs sm:text-sm font-medium text-gray-700 focus:outline-none focus:border-[#E23744]"
                >
                  {PRODUCT_CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Product Cards Grid - Fully Responsive */}
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-2xl border border-dashed border-gray-300 p-12 text-center space-y-3">
                <Package className="w-12 h-12 text-gray-300 mx-auto" />
                <h3 className="font-bold text-gray-800 text-base">No products match your search</h3>
                <p className="text-xs text-gray-500 max-w-sm mx-auto">
                  Try adjusting your search keywords or category filters, or click the button below to add a new product.
                </p>
                <button
                  type="button"
                  onClick={handleOpenAddModal}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#E23744] text-white text-xs font-semibold rounded-lg"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add First Product</span>
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-2xl border border-gray-200/90 shadow-xs hover:shadow-md transition-all overflow-hidden flex flex-col group"
                  >
                    {/* Card Image */}
                    <div className="relative h-48 w-full bg-gray-100 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Category Badge */}
                      <span className="absolute top-3 left-3 px-2.5 py-1 bg-white/95 backdrop-blur-xs text-[11px] font-bold text-gray-800 rounded-md shadow-xs border border-gray-100">
                        {product.category}
                      </span>
                      {/* Status Badge */}
                      <span
                        className={`absolute top-3 right-3 px-2.5 py-1 text-[10px] font-bold rounded-full shadow-xs ${
                          product.status === "In Stock"
                            ? "bg-emerald-500 text-white"
                            : product.status === "Fast Track (15 Days)"
                            ? "bg-blue-600 text-white"
                            : "bg-gray-800 text-white"
                        }`}
                      >
                        {product.status}
                      </span>
                    </div>

                    {/* Card Body */}
                    <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-bold text-base text-[#111827] leading-snug">
                            {product.title}
                          </h3>
                        </div>

                        {/* Price Tag */}
                        <div className="text-sm font-extrabold text-[#E23744]">
                          {product.price}
                        </div>

                        {/* Specs */}
                        <p className="text-xs text-gray-600 line-clamp-2">
                          <span className="font-semibold text-gray-700">Specs:</span> {product.specs}
                        </p>

                        {/* Dimensions & Warranty */}
                        <div className="flex flex-wrap gap-2 text-[11px] text-gray-500 pt-1">
                          <span className="bg-gray-50 px-2 py-0.5 rounded border border-gray-100">
                            📐 {product.dimensions}
                          </span>
                          <span className="bg-gray-50 px-2 py-0.5 rounded border border-gray-100">
                            🛡️ {product.warranty}
                          </span>
                        </div>
                      </div>

                      {/* Card Action Footer */}
                      <div className="pt-3 border-t border-gray-100 flex items-center justify-between gap-2">
                        <button
                          type="button"
                          onClick={() => setViewingProduct(product)}
                          className="flex items-center gap-1 text-xs font-semibold text-gray-600 hover:text-black px-2.5 py-1.5 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>View</span>
                        </button>

                        <div className="flex items-center gap-1.5">
                          <button
                            type="button"
                            onClick={() => handleOpenEditModal(product)}
                            className="flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700 px-2.5 py-1.5 rounded-lg hover:bg-blue-50 transition-colors"
                          >
                            <Edit2 className="w-3.5 h-3.5" />
                            <span>Edit</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => setDeletingProduct(product)}
                            className="p-1.5 text-gray-400 hover:text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                            title="Delete Product"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ================= TAB 2: LEADS & INQUIRIES ================= */}
        {activeTab === "leads" && (
          <div className="space-y-6">
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-200/80 shadow-xs flex items-center justify-between">
              <div>
                <h2 className="text-base font-bold text-gray-900">
                  Client Quotes &amp; Site Measurement Requests
                </h2>
                <p className="text-xs text-gray-500">
                  Real-time enquiries received from the contact form and instant price estimators.
                </p>
              </div>
              <span className="px-3 py-1 bg-red-50 text-[#E23744] text-xs font-bold rounded-full">
                {leads.length} Active Leads
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {leads.map((lead) => (
                <div
                  key={lead.id}
                  className="bg-white p-5 rounded-2xl border border-gray-200/90 shadow-xs space-y-4 hover:border-gray-300 transition-all"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-bold text-base text-[#111827]">{lead.name}</h3>
                      <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3 text-[#E23744]" />
                        <span>{lead.locality}</span>
                      </p>
                    </div>

                    <select
                      value={lead.status}
                      onChange={(e) => handleUpdateLeadStatus(lead.id, e.target.value as any)}
                      className={`text-xs font-bold px-2.5 py-1 rounded-full border focus:outline-none ${
                        lead.status === "New"
                          ? "bg-red-50 text-red-700 border-red-200"
                          : lead.status === "Measurement Scheduled"
                          ? "bg-purple-50 text-purple-700 border-purple-200"
                          : lead.status === "In Fabrication"
                          ? "bg-amber-50 text-amber-700 border-amber-200"
                          : "bg-emerald-50 text-emerald-700 border-emerald-200"
                      }`}
                    >
                      <option value="New">New</option>
                      <option value="Contacted">Contacted</option>
                      <option value="Measurement Scheduled">Measurement Scheduled</option>
                      <option value="In Fabrication">In Fabrication</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </div>

                  <div className="bg-gray-50 p-3 rounded-xl space-y-1.5 text-xs text-gray-700">
                    <p>
                      <span className="font-semibold text-gray-900">Project:</span>{" "}
                      {lead.propertyType}
                    </p>
                    <p>
                      <span className="font-semibold text-gray-900">Requirements:</span>{" "}
                      {lead.productInterest}
                    </p>
                    <p>
                      <span className="font-semibold text-gray-900">Estimated Budget:</span>{" "}
                      <span className="font-bold text-[#E23744]">{lead.budget}</span>
                    </p>
                    {lead.notes && (
                      <p className="pt-1 text-gray-600 italic border-t border-gray-200">
                        &quot;{lead.notes}&quot;
                      </p>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-500 pt-2 border-t border-gray-100">
                    <div className="flex items-center gap-3">
                      <a
                        href={`tel:${lead.phone}`}
                        className="flex items-center gap-1 font-semibold text-emerald-600 hover:underline"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>{lead.phone}</span>
                      </a>
                    </div>
                    <span className="text-[11px] text-gray-400">📅 {lead.createdAt}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= TAB 3: METRICS & OVERVIEW ================= */}
        {activeTab === "overview" && (
          <div className="space-y-6">
            {/* KPI Stat Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-gray-200/90 shadow-xs space-y-1">
                <span className="text-xs text-gray-500 font-medium">Total Products</span>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#111827]">
                  {products.length}
                </p>
                <span className="text-[11px] text-emerald-600 font-semibold">Active in Catalog</span>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-200/90 shadow-xs space-y-1">
                <span className="text-xs text-gray-500 font-medium">Active Inquiries</span>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#E23744]">{leads.length}</p>
                <span className="text-[11px] text-gray-500 font-medium">Hyderabad &amp; Suburbs</span>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-200/90 shadow-xs space-y-1">
                <span className="text-xs text-gray-500 font-medium">Core Categories</span>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#111827]">8</p>
                <span className="text-[11px] text-blue-600 font-semibold">Windows, Doors &amp; Joinery</span>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-200/90 shadow-xs space-y-1">
                <span className="text-xs text-gray-500 font-medium">Workshop Unit</span>
                <p className="text-2xl sm:text-3xl font-extrabold text-emerald-600">Active</p>
                <span className="text-[11px] text-gray-500 font-medium">Hayathnagar Khalsa</span>
              </div>
            </div>

            {/* Quick Summary Panels */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-gray-200/90 shadow-xs space-y-4">
                <h3 className="font-bold text-base text-gray-900">
                  Products Breakdown by Category
                </h3>
                <div className="space-y-2.5">
                  {PRODUCT_CATEGORIES.filter((c) => c !== "All Categories").map((category) => {
                    const count = products.filter((p) => p.category === category).length;
                    const pct = Math.round((count / (products.length || 1)) * 100);
                    return (
                      <div key={category} className="space-y-1">
                        <div className="flex justify-between text-xs font-semibold text-gray-700">
                          <span>{category}</span>
                          <span>{count} items ({pct}%)</span>
                        </div>
                        <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-[#E23744] rounded-full transition-all"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200/90 shadow-xs space-y-4">
                <h3 className="font-bold text-base text-gray-900">
                  Hayathnagar Workshop Operational Highlights
                </h3>
                <ul className="space-y-3 text-xs text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>
                      <strong>Laser Measurement Calibrations:</strong> All quotes include 0mm tolerance laser survey before cutting.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>
                      <strong>Material Certification:</strong> 6063-T6 virgin architectural alloy &amp; Saint-Gobain toughened safety glass.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>
                      <strong>Direct Factory Pricing:</strong> Eliminates intermediary builder commissions and agent margins.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* ================= MODAL: ADD / EDIT PRODUCT ================= */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-gray-200 overflow-hidden max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-150">
            {/* Modal Header */}
            <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between bg-white">
              <h2 className="font-bold text-base sm:text-lg text-[#111827]">
                {editingProduct ? "Edit Product" : "Add New SkyTech Product"}
              </h2>
              <button
                type="button"
                onClick={() => setIsAddModalOpen(false)}
                className="p-1.5 text-gray-400 hover:text-black rounded-lg hover:bg-gray-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Form Scrollable */}
            <form onSubmit={handleSaveProduct} className="p-5 overflow-y-auto space-y-4 text-xs sm:text-sm">
              {/* Title */}
              <div>
                <label className="block font-semibold text-gray-700 mb-1">
                  Product Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. European Domal 45mm Sliding Window"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3.5 py-2 border border-gray-200 rounded-xl focus:outline-none focus:border-[#E23744]"
                />
              </div>

              {/* Category & Price */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">
                    Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3.5 py-2 border border-gray-200 rounded-xl focus:outline-none focus:border-[#E23744]"
                  >
                    {PRODUCT_CATEGORIES.filter((c) => c !== "All Categories").map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-gray-700 mb-1">
                    Price Estimate <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. ₹650 – ₹950 / sq.ft or ₹2.2 Lakhs"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    className="w-full px-3.5 py-2 border border-gray-200 rounded-xl focus:outline-none focus:border-[#E23744]"
                  />
                </div>
              </div>

              {/* Specs & Dimensions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">
                    Material / Profile Specs
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 6063-T6 Aluminium, 12mm Toughened Glass"
                    value={formData.specs}
                    onChange={(e) => setFormData({ ...formData, specs: e.target.value })}
                    className="w-full px-3.5 py-2 border border-gray-200 rounded-xl focus:outline-none focus:border-[#E23744]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-gray-700 mb-1">
                    Dimensions / Sizing
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Custom up to 10ft height"
                    value={formData.dimensions}
                    onChange={(e) => setFormData({ ...formData, dimensions: e.target.value })}
                    className="w-full px-3.5 py-2 border border-gray-200 rounded-xl focus:outline-none focus:border-[#E23744]"
                  />
                </div>
              </div>

              {/* Status & Warranty */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Status</label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
                    className="w-full px-3.5 py-2 border border-gray-200 rounded-xl focus:outline-none focus:border-[#E23744]"
                  >
                    <option value="Made to Order">Made to Order</option>
                    <option value="Fast Track (15 Days)">Fast Track (15 Days)</option>
                    <option value="In Stock">In Stock</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Warranty</label>
                  <input
                    type="text"
                    placeholder="e.g. 10 Years Factory Warranty"
                    value={formData.warranty}
                    onChange={(e) => setFormData({ ...formData, warranty: e.target.value })}
                    className="w-full px-3.5 py-2 border border-gray-200 rounded-xl focus:outline-none focus:border-[#E23744]"
                  />
                </div>
              </div>

              {/* Image Picker */}
              <div>
                <label className="block font-semibold text-gray-700 mb-1">Product Image</label>
                <div className="flex gap-2 mb-2 overflow-x-auto pb-1">
                  {PRESET_IMAGES.map((preset) => (
                    <button
                      type="button"
                      key={preset.label}
                      onClick={() => setFormData({ ...formData, image: preset.url })}
                      className={`px-2.5 py-1 text-xs rounded-lg border whitespace-nowrap transition-colors ${
                        formData.image === preset.url
                          ? "bg-[#E23744] text-white border-[#E23744]"
                          : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                      }`}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
                <input
                  type="url"
                  placeholder="Or enter custom image URL"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  className="w-full px-3.5 py-2 border border-gray-200 rounded-xl focus:outline-none focus:border-[#E23744]"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block font-semibold text-gray-700 mb-1">Description</label>
                <textarea
                  rows={3}
                  placeholder="Detailed features, acoustic properties, and applications..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3.5 py-2 border border-gray-200 rounded-xl focus:outline-none focus:border-[#E23744]"
                />
              </div>

              {/* Modal Footer Actions */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 text-xs sm:text-sm font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#E23744] hover:bg-[#C92531] text-white rounded-xl text-xs sm:text-sm font-semibold shadow-md transition-colors"
                >
                  {editingProduct ? "Save Changes" : "Create Product"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ================= MODAL: DELETE CONFIRMATION ================= */}
      {deletingProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white max-w-sm w-full rounded-2xl p-6 shadow-2xl border border-gray-200 space-y-4 text-center animate-in zoom-in-95 duration-150">
            <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto">
              <Trash2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-base text-gray-900">Delete Product?</h3>
              <p className="text-xs text-gray-500 mt-1">
                Are you sure you want to remove &quot;{deletingProduct.title}&quot; from the catalog? This action can be undone by resetting defaults.
              </p>
            </div>
            <div className="flex gap-2 pt-2">
              <button
                type="button"
                onClick={() => setDeletingProduct(null)}
                className="flex-1 py-2 border border-gray-200 rounded-xl text-xs font-semibold text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleConfirmDelete}
                className="flex-1 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-semibold transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= MODAL: VIEW DETAILS ================= */}
      {viewingProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white max-w-xl w-full rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col max-h-[90vh]">
            <div className="relative h-60 w-full bg-gray-100">
              <img
                src={viewingProduct.image}
                alt={viewingProduct.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setViewingProduct(null)}
                className="absolute top-3 right-3 p-2 bg-black/50 hover:bg-black text-white rounded-full transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-5 space-y-4 overflow-y-auto text-xs sm:text-sm">
              <div>
                <span className="text-[11px] font-bold text-[#E23744] uppercase tracking-wider">
                  {viewingProduct.category}
                </span>
                <h2 className="text-lg font-bold text-gray-900 mt-0.5">
                  {viewingProduct.title}
                </h2>
                <p className="text-base font-extrabold text-[#E23744] mt-1">
                  {viewingProduct.price}
                </p>
              </div>

              <div className="bg-gray-50 p-3.5 rounded-xl space-y-2 text-xs">
                <p>
                  <strong>Specifications:</strong> {viewingProduct.specs}
                </p>
                <p>
                  <strong>Dimensions:</strong> {viewingProduct.dimensions}
                </p>
                <p>
                  <strong>Warranty:</strong> {viewingProduct.warranty}
                </p>
                <p>
                  <strong>Availability:</strong> {viewingProduct.status}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Overview:</h4>
                <p className="text-gray-600 leading-relaxed text-xs">
                  {viewingProduct.description}
                </p>
              </div>

              {viewingProduct.features && viewingProduct.features.length > 0 && (
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1.5">Key Highlights:</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {viewingProduct.features.map((f, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 bg-red-50 text-[#E23744] text-[11px] font-medium rounded-md"
                      >
                        ✓ {f}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 border-t border-gray-100 bg-gray-50 flex justify-end">
              <button
                type="button"
                onClick={() => setViewingProduct(null)}
                className="px-4 py-2 bg-gray-900 text-white rounded-xl text-xs font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
