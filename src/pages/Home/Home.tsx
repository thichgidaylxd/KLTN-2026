// ─── HomePage.tsx ─────────────────────────────────────────────────────────────
// Cập nhật: Thêm Section 2, 3, 4 với màu nền phân biệt.
// Cây bắp (CornIntro) nằm ở vị trí tuyệt đối, vắt ngang ranh giới Section 1 và 2.

import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/layout/HeroSection";
import { ArrowUpRightIcon, LeafIcon, BarChart2Icon, CloudSunIcon, BotIcon, PhoneIcon, MailIcon, MapPinIcon } from "lucide-react";
import CornIntro from "../../assets/Corn-intro.png";

// ─── Section 2: Giới Thiệu ────────────────────────────────────────────────────
function IntroSection() {
  return (
    <section
      id="section-2"
      className="relative w-full bg-[#F5F0E8] pt-[160px] pb-[100px] px-[93px]"
    // pt-[160px] để nhường chỗ cho cây bắp đang vắt xuống từ section 1
    >
      <div className="flex items-start gap-16">
        {/* Left: Text */}
        <div className="flex-1 max-w-[520px]">
          <div className="flex items-center gap-2 mb-4">
            <LeafIcon className="w-5 h-5 text-green-600" />
            <span className="font-roboto text-[14px] font-semibold text-green-600 uppercase tracking-widest">
              Giới Thiệu
            </span>
          </div>

          <h2 className="font-playfair text-[44px] font-semibold leading-[1.15] text-[#2D3A1E] mb-6">
            Gico trồng giá trị – Gặt hái thành công trên mọi cánh đồng.
          </h2>

          <p className="font-roboto text-[15px] text-[#5A6045] leading-relaxed mb-8">
            FamerAI sử dụng AI để phân tích cây trồng, phát hiện bệnh và đưa ra
            giải pháp chăm sóc tối ưu. Giúp nông dân trồng đúng – chăm đúng –
            thu hoạch hiệu quả.
          </p>

          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#E8C840] hover:bg-yellow-300 transition-colors font-roboto text-[16px] font-medium text-[#2D3A1E]"
          >
            Tạo mùa vụ ngay <ArrowUpRightIcon className="w-5 h-5" />
          </a>

          {/* Feature Cards */}
          <div className="flex gap-4 mt-10">
            <div className="flex-1 bg-white rounded-2xl p-5 shadow-sm border border-[#E8E0D0]">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-3">
                <LeafIcon className="w-6 h-6 text-green-600" />
              </div>
              <p className="font-roboto text-[14px] font-semibold text-[#2D3A1E]">
                Quản lý mùa vụ thông minh
              </p>
            </div>
            <div className="flex-1 bg-white rounded-2xl p-5 shadow-sm border border-[#E8E0D0]">
              <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center mb-3">
                <BarChart2Icon className="w-6 h-6 text-yellow-600" />
              </div>
              <p className="font-roboto text-[14px] font-semibold text-[#2D3A1E]">
                Giám sát và báo cáo hiệu quả
              </p>
            </div>
          </div>
        </div>

        {/* Right: Image placeholder (corn close-up từ design gốc) */}
        <div className="flex-1 max-w-[380px] rounded-3xl overflow-hidden shadow-xl h-[380px] bg-[#D4C9A8] flex items-center justify-center">
          <span className="text-[#8A7A5A] font-roboto text-sm">
            🌽 Hình ảnh bắp
          </span>
        </div>
      </div>
    </section>
  );
}

// ─── Section 3: Dịch Vụ ──────────────────────────────────────────────────────
const services = [
  {
    icon: <BotIcon className="w-8 h-8 text-white" />,
    bg: "bg-green-700",
    title: "AI Phân Tích Cây Trồng",
    desc: "Nhận diện bệnh hại, sâu bọ chính xác đến 95% qua ảnh chụp từ điện thoại.",
  },
  {
    icon: <CloudSunIcon className="w-8 h-8 text-white" />,
    bg: "bg-sky-500",
    title: "Dự Báo Thời Tiết Nông Nghiệp",
    desc: "Cảnh báo sớm mưa, hạn hán, sương muối ảnh hưởng mùa vụ của bạn.",
  },
  {
    icon: <BarChart2Icon className="w-8 h-8 text-white" />,
    bg: "bg-amber-500",
    title: "Báo Cáo Thu Hoạch",
    desc: "Thống kê năng suất, chi phí, lợi nhuận theo từng vụ và từng thửa ruộng.",
  },
  {
    icon: <LeafIcon className="w-8 h-8 text-white" />,
    bg: "bg-emerald-600",
    title: "Lịch Chăm Sóc Thông Minh",
    desc: "Nhắc nhở tưới nước, bón phân, phun thuốc đúng thời điểm tối ưu.",
  },
];

function ServicesSection() {
  return (
    <section
      id="section-3"
      className="w-full bg-[#1A2E10] py-[100px] px-[93px]"
    >
      <div className="text-center mb-14">
        <span className="font-roboto text-[13px] font-semibold text-green-400 uppercase tracking-widest">
          Dịch Vụ
        </span>
        <h2 className="font-playfair text-[48px] font-semibold text-white mt-3 leading-tight">
          Công nghệ phục vụ <br />
          <span className="text-[#E8C840]">nông nghiệp hiện đại</span>
        </h2>
        <p className="font-roboto text-[15px] text-green-300 mt-4 max-w-[480px] mx-auto leading-relaxed">
          Bộ giải pháp toàn diện giúp nông dân Việt Nam tối ưu hóa mùa vụ,
          giảm rủi ro và tăng thu nhập.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 max-w-[860px] mx-auto">
        {services.map((s, i) => (
          <div
            key={i}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors group"
          >
            <div
              className={`w-14 h-14 rounded-2xl ${s.bg} flex items-center justify-center mb-5`}
            >
              {s.icon}
            </div>
            <h3 className="font-playfair text-[22px] font-semibold text-white mb-3">
              {s.title}
            </h3>
            <p className="font-roboto text-[14px] text-green-300 leading-relaxed">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Section 4: Liên Hệ ──────────────────────────────────────────────────────
function ContactSection() {
  return (
    <section
      id="section-4"
      className="w-full bg-[#FDF6E3] py-[100px] px-[93px]"
    >
      <div className="flex items-start gap-20">
        {/* Left */}
        <div className="flex-1">
          <span className="font-roboto text-[13px] font-semibold text-green-600 uppercase tracking-widest">
            Liên Hệ
          </span>
          <h2 className="font-playfair text-[44px] font-semibold text-[#2D3A1E] mt-3 mb-6 leading-tight">
            Bắt đầu hành trình <br />
            <span className="text-green-700">canh tác thông minh</span>
          </h2>
          <p className="font-roboto text-[15px] text-[#5A6045] leading-relaxed mb-10 max-w-[400px]">
            Đội ngũ FamerAI sẵn sàng hỗ trợ bạn từ khâu cài đặt đến vận hành.
            Liên hệ ngay để được tư vấn miễn phí.
          </p>

          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                <PhoneIcon className="w-5 h-5 text-green-700" />
              </div>
              <span className="font-roboto text-[15px] text-[#2D3A1E] font-medium">
                0901 234 567
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                <MailIcon className="w-5 h-5 text-green-700" />
              </div>
              <span className="font-roboto text-[15px] text-[#2D3A1E] font-medium">
                hello@famerai.vn
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                <MapPinIcon className="w-5 h-5 text-green-700" />
              </div>
              <span className="font-roboto text-[15px] text-[#2D3A1E] font-medium">
                Đà Nẵng, Việt Nam
              </span>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="flex-1 bg-white rounded-3xl shadow-xl p-10 border border-[#E8E0D0]">
          <h3 className="font-playfair text-[24px] font-semibold text-[#2D3A1E] mb-6">
            Gửi tin nhắn cho chúng tôi
          </h3>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Họ và tên"
              className="w-full px-4 py-3 rounded-xl border border-[#D8D0C0] font-roboto text-[14px] text-[#2D3A1E] placeholder-[#A09080] focus:outline-none focus:border-green-500 transition-colors"
            />
            <input
              type="email"
              placeholder="Địa chỉ email"
              className="w-full px-4 py-3 rounded-xl border border-[#D8D0C0] font-roboto text-[14px] text-[#2D3A1E] placeholder-[#A09080] focus:outline-none focus:border-green-500 transition-colors"
            />
            <textarea
              placeholder="Nội dung tin nhắn..."
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-[#D8D0C0] font-roboto text-[14px] text-[#2D3A1E] placeholder-[#A09080] focus:outline-none focus:border-green-500 transition-colors resize-none"
            />
            <button className="w-full py-3.5 rounded-xl bg-[#E8C840] hover:bg-yellow-300 transition-colors font-roboto text-[16px] font-semibold text-[#2D3A1E]">
              Gửi tin nhắn →
            </button>
          </div>
        </div>
      </div>

      {/* Footer strip */}
      <div className="mt-20 pt-8 border-t border-[#E0D8C8] flex items-center justify-between">
        <span className="font-roboto text-[13px] text-[#8A7A5A]">
          © 2025 FamerAI. All rights reserved.
        </span>
        <span className="font-roboto text-[13px] text-[#8A7A5A]">
          🌽 Trồng thông minh – Sống bền vững
        </span>
      </div>
    </section>
  );
}

// ─── Root: HomePage ───────────────────────────────────────────────────────────
export function HomePage() {
  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden">

      {/* ── WRAPPER: Section 1 + Section 2 + cây bắp chồng lên nhau ── */}
      <div className="relative">

        {/* Section 1: Hero (Navbar overlay bên trong) */}
        <div className="relative w-full min-h-[calc(100vh+100px)] bg-white overflow-x-hidden">
          <Navbar />
          <HeroSection />
          {/*
            NOTE: Trong HeroSection, bạn hãy XÓA hoặc ẨN phần:
              <img src={CornIntro} ... className="absolute left-[493px] top-[600px] ..." />
            vì chúng ta sẽ render cây bắp tại đây thay thế để nó có thể vắt xuống Section 2.
          */}
        </div >
        <img
          src={CornIntro}
          alt="Corn field"
          className="absolute z-20"
          style={{
            bottom: "-5%",   // 30% của chiều cao section → luôn tương đối
            left: "493px",
            width: "313px",
            height: "359px",
            objectFit: "cover",
          }}
        />
      </div >

      {/* Section 2: Giới Thiệu – bg vàng kem */}
      < IntroSection />

      {/* Section 3: Dịch Vụ – bg xanh đậm */}
      < ServicesSection />

      {/* Section 4: Liên Hệ – bg vàng nhạt */}
      < ContactSection />

    </div >
  );
}

export default HomePage;