import { PeopleType } from './api.type';
import { client } from './axios';

export const PeopleApi = {
  async getPeople() {
    const response = await client.get<{ results: PeopleType[] }>('people');
    return response.data.results;
  },
};
