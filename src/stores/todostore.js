import axios from 'axios';
import {create} from 'zustand';

const useTodoStore = create ((set) => ({
  taskName: [];
  
}))