import { useState, useRef, useEffect } from "react";
import { Navbar } from "../../components/layout/Navbar";
import LogoBrowser from "../../assets/Logo-browser.png";
import RegisterOTPBg from "../../assets/Register-OTP.png";

interface OTPVerificationProps {
  email?: string;
  onVerify?: (otp: string) => void;
}

const spinStyle = `
  @keyframes logoSpin {
    0%   { transform: rotate(0deg) scale(0.8); opacity: 0; }
    30%  { opacity: 1; }
    100% { transform: rotate(720deg) scale(1); opacity: 1; }
  }
`;

const OTPVerificationPage: React.FC<OTPVerificationProps> = ({
  email = "example@gmail.com",
  onVerify,
}) => {
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const [mounted, setMounted] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Trigger entrance animation after mount
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  const handleChange = (index: number, value: string) => {
    // Only allow digits
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(0, 1);
    setOtp(newOtp);

    // Auto-focus to next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text/plain").replace(/\D/g, "");

    if (pastedData.length > 0) {
      const newOtp = [];
      for (let i = 0; i < 6 && i < pastedData.length; i++) {
        newOtp[i] = pastedData[i];
      }
      while (newOtp.length < 6) {
        newOtp.push("");
      }
      setOtp(newOtp);

      const focusIndex = Math.min(pastedData.length, 5);
      inputRefs.current[focusIndex]?.focus();
    }
  };

  const handleVerify = () => {
    const otpCode = otp.join("");
    if (otpCode.length === 6) {
      onVerify?.(otpCode);
    }
  };

  const isComplete = otp.every((digit) => digit !== "");

  return (
    <div
      className="relative min-h-screen w-full overflow-hidden"
      style={{
        backgroundImage: `url(${RegisterOTPBg})`,

        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Navbar */}
      <Navbar hideCreateButton={true} hideDivider={true} />

      {/* Content */}
      <>
        <style>{spinStyle}</style>
        <div className="relative w-full">
          {/* Main Content */}
          <div className="relative z-10 flex items-center justify-center min-h-screen">
            <div className="w-full max-w-md px-6 py-8">
              {/* Logo Icon */}
              <div className="flex flex-col items-center gap-6">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20">
                    <img
                      src={LogoBrowser}
                      alt="FamerAI corn logo"
                      className={`h-[100px] w-auto object-contain transition-all duration-[10ms] ease-out
                  ${mounted ? "animate-logo-spin" : ""}`}
                      style={{
                        animation: mounted
                          ? "logoSpin 1s ease-in-out 0.1s 1 forwards"
                          : "none",
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Title with Lock Icon */}
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <h2 className="text-5xl font-semibold font-roboto text-white">
                    OTP Email
                  </h2>
                  <svg
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                  >
                    <path
                      d="M32 46 L32 34 Q32 18 50 18 Q68 18 68 34 L68 46"
                      fill="none"
                      stroke="#FACC15"
                      stroke-width="7"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />

                    <rect
                      x="22"
                      y="44"
                      width="56"
                      height="42"
                      rx="7"
                      fill="none"
                      stroke="#FACC15"
                      stroke-width="7"
                    />

                    <circle
                      cx="50"
                      cy="63"
                      r="6"
                      fill="none"
                      stroke="#FACC15"
                      stroke-width="5.5"
                    />

                    <line
                      x1="50"
                      y1="69"
                      x2="50"
                      y2="78"
                      stroke="#FACC15"
                      stroke-width="5.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Description */}
              <div className="text-center mb-8">
                <p className="text-base font-roboto font-semibold text-yellow-50/80 leading-relaxed">
                  Nhập mã xác thực chúng tôi đã gửi qua email của bạn
                </p>
                <p className="text-yellow-300 font-roboto font-semibold mt-1 break-all">
                  {email}
                </p>
              </div>

              {/* OTP Input Fields */}
              <div className="flex justify-center gap-4 mb-8">
                {[0, 1, 2, 3, 4, 5].map((index) => (
                  <input
                    key={index}
                    ref={(el) => {
                      inputRefs.current[index] = el;
                    }}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={otp[index]}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={handlePaste}
                    className="w-14 h-14 text-center text-xl font-roboto font-semibold border-2 border-yellow-400/50 rounded-full bg-white/10 text-white placeholder-yellow-200/30 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 transition"
                    placeholder="○"
                  />
                ))}
              </div>

              {/* Verify Button */}
              <button
                onClick={handleVerify}
                disabled={!isComplete}
                className={`w-full py-4 rounded-lg font-roboto font-semibold text-white transition mb-4 ${
                  isComplete
                    ? "bg-yellow-400 hover:bg-yellow-500 cursor-pointer"
                    : "bg-gray-400 cursor-not-allowed opacity-50"
                }`}
              >
                Xác thực
              </button>

              {/* Resend Link */}
              <div className="text-center">
                <p className="text-sm font-roboto font-semibold text-yellow-50/60">
                  Bạn không nhận được OTP?{" "}
                  <button
                    type="button"
                    className="font-roboto font-semibold text-yellow-300 hover:text-yellow-400 transition cursor-pointer"
                  >
                    Gửi lại
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default OTPVerificationPage;
