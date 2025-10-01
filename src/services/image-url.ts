const getCroppedImageUrl = (url:string) => 
{
    const index = url.lastIndexOf('media/') + 'media/'.length;
    return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
}   

export default getCroppedImageUrl;