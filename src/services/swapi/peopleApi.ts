import { client } from './axios';
import { PeopleType } from './api.type';

export const PeopleApi = {
  async getPeople() {
    const response = await client.get<{ results: PeopleType[] }>('people');
    return response.data.results;
  },
};
