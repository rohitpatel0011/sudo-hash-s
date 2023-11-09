import { NextResponse } from "next/server";
import prisma from "@/utils/connect";
export const GET = async (req) => {
  const { searchParams } = new URL(req.url);

  const cat = searchParams.get("cat");
  const page = searchParams.get("page");
  const POST_PER_PAGE = 2;

  const query = {

  };



  try {
    const posts = await prisma.post.findMany();
    return new NextResponse(JSON.stringify( posts, { status: 200 }))
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong! please try again..." }, { status: 500 })
    );
  }
};


// import { getAuthSession } from "@/utils/auth";
// import { NextResponse } from "next/server";
// import prisma from "@/utils/connect";

// export const GET = async (req) => {
//   const { searchParams } = new URL(req.url)
//   const page = searchParams.get("page")

//   const POST_PER_PAGE = 2;

//   try {

//     const posts = await prisma.post.findMany(
//       {
//         take: POST_PER_PAGE,
//         skip: POST_PER_PAGE * (page - 1),
//       }
//     );

//     return new NextResponse(JSON.stringify(posts, { status: 200 }))
//   } catch (err) {
//     return new NextResponse(
//       JSON.stringify({ message: "Something went wrong! please try again..." }, { status: 500 })
//     );
//   }
// };
