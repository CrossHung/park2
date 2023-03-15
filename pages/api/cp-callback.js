import nc from "next-connect";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
// import User from "../../../models/User";
// import db from "../../../utils/db";
// import auth from "../../../middleware/auth";
const handler = nc() //.use(auth);
handler.post(async (req, res, next) => {

  const { body } = req

//  if (process.env.SPACE_CALLBACK_APIKEY !== body.apikey) return next()
  //if (body.apikey != "cp_api_key16888") return next()

  //not log everything on prod.
  // if (body.current_status === 'Charging' && body.data > 1) return next()

  // data: {
  //   apikey,
  //   cpid,
  //   cp_online, //參數有:online , offline
  //   cmd,
  //   current_status, //參數有:Available -> Preparing -> Charging -> Finishing
  //   data1, // kWh
  //   data2, // A
  //   data3, // V
  //   data4,
  //   data5,
  //   data6
  // },

  try {

    const newUser = await prisma.CpReportCb_benson.create({
      data: body,
    })

    // const users = await prisma.user.findMany()
    res.status(200)
      .json({ message: "Logged cp-callback." });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
});

export default handler;
