import Image from "next/image";
import Button from "@/components/Button/Button";
import { instaImages } from "@/data/insta";


const Insta = () => {
    return (
        <div className="mx-auto max-w-2xl  pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className=" mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {instaImages.map((img, idx) => (
                    <div key={idx} className="mx-auto imageContainer">
                        <Image src={img.src} width={306} height={306} alt={img.alt} />
                        <Button
                          href="https://instagram.com"
                          target="_blank"
                          type="icon"
                          extraClassNames="hidden absolute z-10 text-white font-semibold p-0"
                          style={{ top: "45%", right: "45%" }}
                        >
                          <Image
                            src="/images/insta/instagram.svg"
                            alt="instagram"
                            width={36}
                            height={36}
                          />
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Insta
