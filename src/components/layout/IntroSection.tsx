import { LeafIcon, BarChart2Icon, ArrowUpRightIcon } from "lucide-react";

export function IntroSection() {
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
