interface HandDrawnTextProps {
  text: string;
}

const HandDrawnText = ({ text }: HandDrawnTextProps) => {
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      {/* Text */}
      <p
        style={{
          fontSize: "18px",
          fontWeight: "500",
          color: "#DB539A",
          margin: "0",
          position: "relative",
          zIndex: "2",
          textAlign: "center",
          padding: "8px 16px",
        }}
      >
        {text}
      </p>

      {/* Hand-Drawn Outline */}
      <svg
        viewBox="0 0 135 90"
        width="185"
        height="75"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-54%, -44%)",
          pointerEvents: "none",
          zIndex: "1",
        }}
      >
        <path
          d="M82.2334 5.48337C60.7105 7.15059 49.1942 9.19233 37.9175 11.6181C32.2055 12.8468 26.0299 14.9914 21.373 17.7778C16.8018 20.5129 13.3478 24.7342 10.3489 28.4197C7.47846 31.9474 7.25295 36.0052 7.92945 40.013C8.74347 44.8354 11.1217 50.1652 15.7332 53.7723C21.4603 58.252 29.7726 60.9213 37.8493 62.123C46.4997 63.41 55.5733 63.5259 64.3615 63.7005C73.1314 63.8746 81.7869 63.6179 90.4307 62.4735C100.064 61.1981 108.527 57.5955 117.624 55.1119C124.602 53.2069 131.982 52.1521 138.889 50.104C143.812 48.644 147.35 46.835 148.839 42.9552C149.849 40.3255 150.8 36.8067 148.941 34.2789C144.966 28.871 135.845 25.2262 128.836 22.4853C121.304 19.5401 113.066 17.7542 104.914 16C95.4399 13.9616 85.8591 12.2185 76.3397 10.3035C62.3684 7.49294 48.3292 4.42169 34.0668 2.47862C23.5105 1.04045 12.4151 1.92459 2 3.45516"
          stroke="#FFA1D1"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default HandDrawnText;
