import { Category } from "../../model/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

class ListCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}
  execute(): Category[] {
    const list = this.categoriesRepository.list();
    return list;
  }
}

export { ListCategoryUseCase };
