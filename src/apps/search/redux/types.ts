export interface SearchState {
    readonly searchText: string
    readonly isLoading: boolean
    readonly errorMessage?: string
    readonly foundPosts: Array<PostBaseInformation>
    readonly foundProfiles: Array<ProfileBaseInformation>
}

export interface PostBaseInformation {
    readonly id: number
    readonly title: string
    readonly text: string
    readonly likesCount: number
    readonly dislikesCount: number
    readonly commentsCount: number
}

export interface ProfileBaseInformation {
    readonly id: number
    readonly profileIconUrl?: string
    readonly nickname: string
    readonly name: string
    readonly isUserFollowing: boolean
    readonly isFollowLoading: boolean
}