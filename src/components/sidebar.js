import { Box, Button, Image, Markdown, Text } from "grommet";
import { Github, Reddit, Twitter } from "grommet-icons";
import * as React from "react";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton,
} from "react-twitter-embed";

export default () => (
  <div>
    <Box
      round="small"
      pad="medium"
      margin="small"
      border={true}
      wrap={true}
      overflow="hidden"
    >
      <Box direction="row-responsive">
        <Box
          margin={{ bottom: "small", left: "none", right: "small" }}
          round="small"
          height="xsmall"
          width="xsmall"
          overflow="hidden"
        >
          <Image
            fit="cover"
            src="https://pbs.twimg.com/profile_images/874617901973504000/8ORVMUMW_200x200.jpg"
          />
        </Box>
        <Box>
          <Text weight="bold" size="large" wrap={true}>
            HackathonPortal
          </Text>
        </Box>
      </Box>
      <Box direction="row" wrap={true}>
        <TwitterFollowButton screenName="HackathonPortal" />
      </Box>
      <Box overflow="hidden">
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="HackathonPortal"
        />
      </Box>
    </Box>
  </div>
);
