import Container from "../../utils/Container";
import blogImgOne from "../../assets/images/Gallary1.png";
import blogImgTwo from "../../assets/images/Gallary2.png";
import blogImgThree from "../../assets/images/Gallary3.png";
import { User, MessageCircle } from "lucide-react";
import Styles from "../../styles/Blogs.module.css";

const blogData = [
  {
    id: 1,
    title: "How Winter Clothes Charity is Changing Lives",
    description:
      "Explore the impact of donating winter clothes and how it brings warmth to those in need during the cold months.",
    image: blogImgOne,
  },
  {
    id: 2,
    title: "Transforming Donated Winter Apparel into Hope",
    description:
      "Explore how donated winter apparel not only provides physical warmth but also instills hope and dignity in those facing adversity",
    image: blogImgTwo,
  },
  {
    id: 3,
    title: "A Closer Look at Winter Clothes Charity",
    description:
      "Examine the essential role of winter clothing charity in helping vulnerable populations endure the challenges of cold weather conditions.",
    image: blogImgThree,
  },
];

export default function Blogs() {
  return (
    <div className="mt-24">
      <Container>
        <div className="text-center mb-12">
          <p className="text-lg font-light text-[#D53F34]">Blog</p>
          <h1 className="text-4xl font-semibold">Our Latest News & Articles</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {blogData.map((blog) => (
            <div key={blog.id} className={`${Styles.blogContainer} border`}>
              <img
                className={`${Styles.blogImage} w-full h-[250px] object-cover opacity-85`}
                src={blog.image}
                alt=""
              />
              <div className=" p-3">
                <h1 className={`${Styles.blogTitle} text-2xl font-medium mb-2`}>
                  {blog.title}
                </h1>
                <p
                  className={`${Styles.blogDescripton} text-gray-600 text-md`}
                >{`${blog.description.slice(0, 110)}...`}</p>
              </div>
              <hr className=" border-gray-200 w-[80%] mx-auto my-2" />
              <div className="p-3 flex items-center justify-between">
                <div className="flex items-center">
                  <User
                    className={Styles.blogUserIcon}
                    size={20}
                    color="#D53F34"
                  />
                  <p className="text-lg font-semibold ml-1">Admin</p>
                </div>
                <div className="flex items-center">
                  <MessageCircle
                    className={Styles.blogCommentIcon}
                    size={20}
                    color="#D53F34"
                  />
                  <p className="text-lg font-semibold ml-1">Comment</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
