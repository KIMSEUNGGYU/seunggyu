export type MenuData = 'blog' | 'series' | 'login';

export type ViewModeData = 'list' | 'block';

export type TagData = {
  id: string;
  name: string;
};

export type PostData = {
  id: string;
  title: string;
  date: string;
  description: string;
  contents: string;
  tags: string[];
};

type List = {
  id: string;
  title: string;
};

export type SeriesData = {
  title: string;
  lists: List[];
};

export interface ImageUploader {
  upload: (file: any) => any;
}
