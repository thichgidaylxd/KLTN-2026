import { PhoneIcon, MailIcon, MapPinIcon } from "lucide-react";

export function ContactSection() {
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
