import { UpdateSupabaseViaApi } from "@/scripts/updateSupabaseViaApi";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
     try {
          await UpdateSupabaseViaApi();
          return NextResponse.json(
               { message: "Update succesful" },
               { status: 200 }
          );
     } catch (error) {
          console.error("Error running update script:", error);
          return NextResponse.json({ error: "Script failed" }, { status: 500 });
     }
}
