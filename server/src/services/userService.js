import models from '../models/data-models';
import { UserViewModel } from '../models/view-models/user-view-model';


const Model = models.User;

export const getAll = async ()=> {
    const items = await Model.find();
    let viewModels = items.map((item)=>UserViewModel.convert(item));
    return viewModels;
};

export const save = async (user)=> {
    const model = await Model.createNew(user);
    const savedItem = await model.save();
    return savedItem._id;
};

