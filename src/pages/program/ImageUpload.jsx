// const SettingUserThumbnail = () => {

//     const onUploadImage = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
//       if (!e.target.files) {
//         return;
//       }
  
//       const formData = new FormData();
//       formData.append('image', e.target.files[0]);
  
//       axios({
//         baseURL: API_HOST,
//         url: '/images/:username/thumbnail',
//         method: 'POST',
//         data: formData,
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       })
//         .then(response => {
//           console.log(response.data);
//         })
//         .catch(error => {
//           console.error(error);
//         });
//     }, []);
    
    
//     const onUploadImageButtonClick = useCallback(() => {
//       if (!inputRef.current) {
//         return;
//       }
//       inputRef.current.click();
//     }, []);
// }