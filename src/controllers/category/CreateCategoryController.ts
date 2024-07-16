import { Request, Response } from "express";
import { CreateCategoryService } from "../../services/category/CreateCategoryService";

class CreateCategoryController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;

    console.log("Request body:", request.body);

    const createCategoryService = new CreateCategoryService();
    try {
      const category = await createCategoryService.execute(name as string);
      return response.json(category);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { CreateCategoryController };
