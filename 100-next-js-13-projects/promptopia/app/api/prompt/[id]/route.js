import { connectDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (request, {params}) => {
  try {
    await connectDB();

    const prompts = await Prompt.findByID(params.id).populate("creator");
    if(!prompt) return new Response('Prompr not found', {status: 404});
    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};

export const PATCH = async (request, {params}) => { 
    const { prompt, tag} = await request.json();

    try{
        await connectDB();

        const existingPrompr = await Prompt.findByID(params.id);
    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;

    await existingPrompt.save();
    return new Response(JSON.stringify(existingPrompt), { status: 200});
    } catch(error){
        return new Response("Failed to update prompts", { status: 500 });
    }
};

export const DELETE = async (request, {params}) => {
    try{
        await connectDB();
        await Prompt.findByIdAndRemove(params.id);
        return new Response("Prompt deleted successfully", { status: 200})
    } catch (error){
        return new Response("Failed to delete prompt",
        { status: 500})
    }
}