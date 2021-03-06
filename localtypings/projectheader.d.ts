declare namespace pxt.Cloud {
    export interface JsonScriptMeta {
        blocksWidth?: number;
        blocksHeight?: number;
        versions?: TargetVersions;
    }
}

declare namespace pxt.workspace {
    export interface InstallHeader {
        name: string; // script name, should always be in sync with pxt.json name
        meta: pxt.Cloud.JsonScriptMeta; // script meta data
        editor: string; // editor that we're in
        board?: string; // name of the package that contains the board.json info
        temporary?: boolean; // don't serialize project
        // older script might miss this
        target: string;
        // older scripts might miss this
        targetVersion: string;
        pubId: string; // for published scripts
        pubCurrent: boolean; // is this exactly pubId, or just based on it
        githubId?: string;
        githubTag?: string; // the release tag if any (commit.tag)
        githubCurrent?: boolean;
        // in progress tutorial if any
        tutorial?: pxt.tutorial.TutorialOptions;
        // completed tutorial info if any
        tutorialCompleted?: pxt.tutorial.TutorialCompletionInfo;
        // workspace guid of the extension under test
        extensionUnderTest?: string;
        cloudSync?: boolean; // Mark a header for syncing with a cloud provider
    }

    export interface Header extends InstallHeader {
        id: string; // guid (generated by us)
        path?: string; // for workspaces that require it
        recentUse: number; // seconds since epoch
        modificationTime: number; // seconds since epoch
        icon?: string; // icon uri

        isDeleted: boolean; // mark whether or not a header has been deleted
        saveId?: any; // used to determine whether a project has been edited while we're saving to cloud

        // For cloud providers
        blobId: string;       // id of the cloud blob holding this script
        blobVersion: string;  // version of the cloud blob
        blobCurrent: boolean; // has the current version of the script been pushed to cloud

        // Used for Updating projects
        backupRef?: string; // guid of backed-up project (present if an update was interrupted)
        isBackup?: boolean; // True if this is a backed-up project (for a pending update)

        // Other
        _rev: string; // used for idb / pouchdb revision tracking
    }
}