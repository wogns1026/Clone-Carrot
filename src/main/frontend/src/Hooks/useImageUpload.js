import { useState } from "react";

const useImageUpload = () => {
  const [imgUrl, setImgUrl] = useState([]);
  const [imgFile, setImgFile] = useState([]); //파일
  const [imgBase64, setImgBase64] = useState([]); // 파일 base64

  const upload = (e) => {
    const files = e.target.files;
    setImgFile((cur) => [...cur, ...files]);
    Array.from(files).forEach((file) => {
      let reader = new FileReader();
      reader.readAsDataURL(file); // 버퍼에 저장
      reader.onloadend = () => {
        const base64 = reader.result; // 비트맵 데이터
        if (base64) {
          // 비트맵 → 문자열로 변화해서 저장
          setImgBase64((imgBase64) => [
            ...imgBase64,
            {
              preview: base64.toString(),
              name: file.name,
              lastModified: file.lastModified,
            },
          ]);
        }
      };
    });
  };
  const remove = (target) => {
    setImgUrl((cur) => cur.filter((url) => url !== target));
    setImgBase64((cur) =>
      cur.filter(
        (img) =>
          img.name !== target.name && img.lastModified !== target.lastModified
      )
    );
  };
  const removeAll = () => {
    setImgUrl("");
    setImgBase64("");
  };
  return [imgFile, imgBase64, upload, remove, removeAll];
};
export default useImageUpload;
