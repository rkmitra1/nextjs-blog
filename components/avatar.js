import Image from 'next/image'

const Avatar = () => (
  <Image
    src="/images/r_and_r_(circle).png" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="Raj and Renea"
  />
)

export default Avatar