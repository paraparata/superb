import { Button, Grid, Image } from "../components/ui";
import { PostCard, PostAttrType } from "../components/base";

const postData: PostAttrType = {
  username: "sutar",
  nickname: "Paraparata",
  imgProfile: "https://paraparata.github.io/img/pp_400x400.jpg",
  linkProfile: "#",
  linkPost: "#",
  imgPost:
    "https://i.pinimg.com/originals/b8/fe/9c/b8fe9cb3386d82d8b2da6ec314f3a979.jpg",
  title: "Post Title",
};

export default function Home() {
  return (
    <>
      <main style={{ width: "100%" }}>
        <Image
          src={postData.imgPost}
          alt="sample"
          width="100%"
          height="420px"
          gradient={true}
          block={true}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "0.5rem",
              position: "absolute",
              left: 0,
              top: 0,
              zIndex: 4,
            }}
          >
            <h1>Welcome to Superb!</h1>
          </div>
        </Image>
        <Grid style={{ width: "100%", paddingTop: "24px" }}>
          {[1, 2, 3, 4, 5, 6, 7].map((item) => {
            return (
              <div key={item}>
                <PostCard post={postData} />
              </div>
            );
          })}
        </Grid>
      </main>
    </>
  );
}
