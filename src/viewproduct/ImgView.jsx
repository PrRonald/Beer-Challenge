export const ImgView = ({ img, size }) => {
    return (
        <div
            style={{
                backgroundImage: `url(/img${img})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: "no-repeat",
                height: size.h,
                width: size.w,
            }}
            className="w">
        </div>
    );
}