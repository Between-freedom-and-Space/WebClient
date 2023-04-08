export function getProfileRouting(profileId: number): string {
    return `/profile/${profileId}`
}

export function getProfileFollowingRouting(profileId: number): string {
    return `/profile/${profileId}/following`
}

export function getPostRouting(postId: number): string {
    return `/post/${postId}`
}

export function getCreateNewPostRouting(): string {
    return `/profile/new-post`
}

export function getSettingsRouting(): string {
    return `/profile/settings`
}