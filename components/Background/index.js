export const Background = ({ color = "#000", children, img }) => {
  return (
    <>
      {img ? (
        <div
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100%"
          }}
        >
          {children}
        </div>
      ) : (
        <div style={{ background: color }}>{children}</div>
      )}
    </>
  );
};

export default Background;
