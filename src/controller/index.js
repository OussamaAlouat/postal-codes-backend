import {setLinks} from "../utils/responses";

const index = (req, res) => {
    res.status(200).json(setLinks(req, {data : {message: 'Server up!!'}}));
};

export {index};