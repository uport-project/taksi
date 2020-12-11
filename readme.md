#TODO

 * [X] enroll in circleci
 * [X] add env vars to circleci
 * [X] add chore pr to master to check that no release goes out
 * [X] add fix pr to check that patch release goes out
 * [X] add feat pr to check that minor release goes out
 * [X] add breaking pr to check that major release goes out
   * releases are only triggered by non whitespace changes in packages
 * [X] create beta branch
 * [X] add commits to beta to check that prerelease is published and tagged with incremental preid
 * [X] add automerge master to beta
 * [X] merge PRs to master to check automerge
   * release only goes out on master
   * 2 merge commits are created
   * one for the first push and one for the chore(release): commit
  * [X] add fix pr to master with conflicts to check behavior of automerge
    * automerge fails, as expected
    


