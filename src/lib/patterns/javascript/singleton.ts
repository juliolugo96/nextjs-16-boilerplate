interface SessionState {
  userId: string | null;
}

class UserSession {
  private state: SessionState = {
    userId: null,
  };

  get currentUserId() {
    return this.state.userId;
  }

  signIn(userId: string) {
    this.state.userId = userId;
  }

  signOut() {
    this.state.userId = null;
  }
}

export const userSessionSingleton = new UserSession();
