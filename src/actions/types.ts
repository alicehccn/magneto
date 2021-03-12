export const GET_PHOTOS = 'GET_PHOTOS'
export const GET_PHOTOS_SUCCESS = 'GET_PHOTOS_SUCCESS'
export const GET_ALBUMS = 'GET_ALBUMS'
export const GET_ALBUMS_SUCCESS = 'GET_ALBUMS_SUCCESS'

export interface PhotoState {
  photos: Photo[],
  albums: Album[],
}

export interface Photo {
  id: string,
  owner: string,
  secret: string,
  server: string,
  farm: number,
  title: string,
  ispublic: number,
  isfriend: number,
  isfamily: number
}

export interface Photos {
  photos: Photo[]
}

export interface getPhotosAction {
  type: typeof GET_PHOTOS_SUCCESS
  payload: any
}

export interface Album {
  id: string,
  owner: string, 
  username: string,
  primary: string,
  secret: string,
  server: string,
  farm: number,
  count_views: number,
  count_comments: number,
  count_photos: number,
  count_videos: number, 
  title: {
    content: string
  }
}

export interface Albums {
  albums: Album[]
}

export interface getAlbumsAction {
  type: typeof GET_ALBUMS_SUCCESS
  payload: any
}

export type PhotoActionTypes = getPhotosAction | getAlbumsAction
